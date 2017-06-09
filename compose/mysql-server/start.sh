#!/bin/bash
A=$(tput sgr0)

if [[ "$MYSQL_DATABASE" = "" || "$MYSQL_USER" = "" || "$MYSQL_USER_PASSWORD" = "" || "$MYSQL_ROOT_PASSWORD" = "" ]]; then
echo ""
echo -e '\E[32m'"please provide the all environment variable in .env file for docker-compose $A"
echo -e '\E[32m'"or provide while run the 'docker run command' with -e option $A"
echo ""
echo -e '\E[33m'"------------------------------------ $A"
echo -e '\E[33m'"|      environment variable        | $A"
echo -e '\E[33m'"------------------------------------ $A"
echo -e '\E[33m'"------------------------------------ $A"
echo -e '\E[33m'"|    1)  MYSQL_USER                | $A"
echo -e '\E[33m'"------------------------------------ $A"
echo -e '\E[33m'"|    2)  MYSQL_USER_PASSWORD       | $A"
echo -e '\E[33m'"------------------------------------ $A"
echo -e '\E[33m'"|    3)  MYSQL_DATABASE            | $A"
echo -e '\E[33m'"------------------------------------ $A"
echo -e '\E[33m'"|    4)  MYSQL_ROOT_PASSWORD       | $A"
echo -e '\E[33m'"------------------------------------ $A"
echo ""
echo -e '\E[32m'"mysql-server will not start until get the required variable value $A"
echo ""
exit 0
else

chown -R mysql:mysql /var/lib/mysql
service mysql restart && sleep 2

until (netstat -tulpn | grep 3306 > /dev/null)
do
sleep 1
done


if (mysql -u root -proot -e 'quit' &>/dev/null);then
mysqladmin -u root -proot password $MYSQL_ROOT_PASSWORD
mysql -u root -p$MYSQL_ROOT_PASSWORD << EOF
CREATE USER '$MYSQL_USER'@'%' IDENTIFIED BY '$MYSQL_USER_PASSWORD';
CREATE DATABASE $MYSQL_DATABASE;
GRANT ALL PRIVILEGES ON $MYSQL_DATABASE.* TO '$MYSQL_USER'@'%';
FLUSH PRIVILEGES;
EOF
fi

service mysql restart && sleep 2

until (netstat -tulpn | grep 3306 > /dev/null)
do
sleep 1
done

if [ -f /data/$MYSQL_DATABASE.sql ];then
mysql -u root -p$MYSQL_ROOT_PASSWORD -D $MYSQL_DATABASE < /data/$MYSQL_DATABASE.sql
else
ls
fi

service mysql restart
until (netstat -tulpn | grep 3306 > /dev/null)
do
sleep 1
done

mysql -u root -p$MYSQL_ROOT_PASSWORD << EOF
CREATE DATABASE testdb;
GRANT ALL PRIVILEGES ON testdb.* TO '$MYSQL_USER'@'%';
FLUSH PRIVILEGES;
EOF

sleep 10

mysql -u root -p$MYSQL_ROOT_PASSWORD << EOF
DROP DATABASE testdb;
FLUSH PRIVILEGES;
EOF

tailf /root/start.sh
fi
