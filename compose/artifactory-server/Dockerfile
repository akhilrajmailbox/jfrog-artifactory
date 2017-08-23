from akhilrajmailbox/ubuntu:14.04
maintainer Akhil Raj < akhilrajmailbox@gmail.com >
run apt-get update \
        && apt-get install -y nano openssh-server openssh-client net-tools dnsutils wget sudo \
        software-properties-common \
        --no-install-recommends \
        && apt-get install wget unzip -y \
        --no-install-recommends \
        && add-apt-repository ppa:webupd8team/java -y \
        && apt-get update -y \
        && echo debconf shared/accepted-oracle-license-v1-1 select true | \
        debconf-set-selections \
        && echo debconf shared/accepted-oracle-license-v1-1 seen true | \
        debconf-set-selections \
        && apt-get install oracle-java8-installer -y \
        --no-install-recommends \
        && apt install oracle-java8-set-default \
        && rm -rf /var/lib/apt/lists/*

env JAVA_HOME /usr/lib/jvm/java-8-oracle
env JAVA_OPTS "-Xmx4096m -Xms1024m"
env PATH $PATH:$JAVA_HOME/bin

run ln -s /usr/lib/apt/methods/http /usr/lib/apt/methods/https
run apt-get update && apt-get install apt-transport-https mysql-client maven -y
run wget -c -O- "https://bintray.com/user/downloadSubjectPublicKey?username=jfrog" | apt-key add -
run sh -c 'echo "deb https://bintray.com/artifact/download/jfrog/artifactory-debs trusty main" | tee -a /etc/apt/sources.list.d/artifactory-oss.list'
run apt-get update
run apt-get -y install jfrog-artifactory-oss=5.3.1


env ARTIFACTORY_HOME /var/opt/jfrog/artifactory

add static/artifactory/mysql-connector-java-5.1.24.jar /opt/jfrog/artifactory/tomcat/lib/mysql-connector-java-5.1.24.jar
add static/artifactory/artifactory-server-start.sh /root/start.sh
run chmod 777 /root/start.sh
run cp -r /var/opt/jfrog/artifactory /root/artifactory
expose 8081
entrypoint /root/start.sh
