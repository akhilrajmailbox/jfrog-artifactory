from akhilrajmailbox/ubuntu:14.04
maintainer Akhil Raj < akhilrajmailbox@gmail.com >

run apt-get update && apt-get install nano openssh-server openssh-client net-tools dnsutils -y
run bash -c 'debconf-set-selections <<< "mysql-server mysql-server/root_password password root"'
run bash -c 'debconf-set-selections <<< "mysql-server mysql-server/root_password_again password root"'
run apt-get install mysql-server-5.5 mysql-client -y
run sed -i "s|bind-address|#bind-address|g" /etc/mysql/my.cnf
copy start.sh /root/start.sh
run chmod 777 /root/start.sh
entrypoint [ "/root/start.sh" ]
