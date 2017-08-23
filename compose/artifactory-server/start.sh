#!/bin/bash
A=$(tput sgr0)

if [[ "$MYSQL_DATABASE" = "" || "$MYSQL_USER" = "" || "$MYSQL_PASSWORD" = "" ]]; then
echo ""
echo -e '\E[32m'"please provide the all environment variable in .env file for docker-compose $A"
echo -e '\E[32m'"or provide while run the 'docker run command' with -e option $A"
echo ""
echo -e '\E[33m'"---------------------------------------------------------------------------- $A"
echo -e '\E[33m'"|      docker-compose variable     |       docker run command variable     | $A"
echo -e '\E[33m'"---------------------------------------------------------------------------- $A"
echo -e '\E[33m'"---------------------------------------------------------------------------- $A"
echo -e '\E[33m'"|    1)  MYSQL_DATABASE            |        1) MYSQL_HOST                  | $A"
echo -e '\E[33m'"---------------------------------------------------------------------------- $A"
echo -e '\E[33m'"|    2)  MYSQL_USER                |        2) MYSQL_DATABASE              | $A"
echo -e '\E[33m'"---------------------------------------------------------------------------- $A"
echo -e '\E[33m'"|    3)  MYSQL_PASSWORD            |        3) MYSQL_USER                  | $A"
echo -e '\E[33m'"---------------------------------------------------------------------------- $A"
echo -e '\E[33m'"|                                  |        4) MYSQL_PASSWORD              | $A"
echo -e '\E[33m'"---------------------------------------------------------------------------- $A"
echo ""
echo -e '\E[32m'"artifactory-server will not start until get the required variable value $A"
echo ""
exit 0
else


cp -r /root/artifactory/* /var/opt/jfrog/artifactory/
mkdir -p /var/opt/jfrog/artifactory/{data,logs,backup}
chown -R artifactory:artifactory $ARTIFACTORY_HOME

     if [ ! -e  $ARTIFACTORY_HOME/data/db.properties-org ]; then

if [ "$MYSQL_HOST" = "" ]; then

cat <<EOF > /etc/opt/jfrog/artifactory/storage.properties
type=mysql
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://artifactory-mysql:3306/$MYSQL_DATABASE?characterEncoding=UTF-8&elideSetAutoCommits=true
username=$MYSQL_USER
password=$MYSQL_PASSWORD
EOF

until (mysql -h artifactory-mysql -u $MYSQL_USER -p$MYSQL_PASSWORD -e 'show databases;' 2>/dev/null | grep $MYSQL_DATABASE)
do
sleep 2
echo "'$MYSQL_USER' can't able to connected to '$MYSQL_DATABASE' on artifactory-mysql"
done

else

cat <<EOF > /etc/opt/jfrog/artifactory/storage.properties
type=mysql
driver=com.mysql.jdbc.Driver
url=jdbc:mysql://$MYSQL_HOST:3306/$MYSQL_DATABASE?characterEncoding=UTF-8&elideSetAutoCommits=true
username=$MYSQL_USER
password=$MYSQL_PASSWORD
EOF

fi
cp -r /etc/opt/jfrog/artifactory/storage.properties $ARTIFACTORY_HOME/data/db.properties-org
     fi


cp -r $ARTIFACTORY_HOME/data/db.properties-org $ARTIFACTORY_HOME/etc/db.properties
cp -r $ARTIFACTORY_HOME/data/db.properties-org /etc/opt/jfrog/artifactory/storage.properties
chown -R artifactory:artifactory /etc/opt/jfrog/artifactory/storage.properties
chown -R artifactory:artifactory $ARTIFACTORY_HOME
service artifactory start
tailf /var/opt/jfrog/artifactory/tomcat/logs/catalina.out
fi
