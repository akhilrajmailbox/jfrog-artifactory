## Instructions

### Software Requiremnets
1. Docker (>= 16) and Docker-Compose (>= 1.8) pre-installed
2. If the host is Windows please refer this [link](https://docs.docker.com/docker-for-windows/install/)

### Port Requirements
* artifactory server runs on Port port number which you privided in the '.env' file under compose folder.


## Steps for Installation
### Preparation
> As a first step docker images need to be download or `docker-compose up` command will automatically download.
### 

Command ::

	- docker-compose up --build		>>	Create the containers and configure, if you want to create the service, database, configurations, run this command.
	- docker-compose up			>>	If you need to restart the services with existing configuration, databases, run this command.

note :: need to run this command from the compose folder, because .env file is present in there.

Directory-structure discription ::
==================================

* compose ::

	- This directory contains the compose file for creating the containers for services

* files ::

	- This directory contains the webpages which i used for configuration.

* compose/.env ::

	- This file used for passing environment variable to the service.
 
* compose/artifactory-server ::
	
	- This folder contains the Dockerfile and dependencies for the artifactory server

* compose/mysql-server ::

	- This folder contains the Dockerfile and dependencies for the mysql server

==================
step 1)
==================

Choose the credentials like username and passwords for the services.
Configure credentials in .env file


* MYSQL_ROOT_PASSWORD

	- password for mysql root user
	- example :: MYSQL_ROOT_PASSWORD=artifact@root

* MYSQL_USER

	- username for mysql user
	- example :: MYSQL_USER=artifactuser

* MYSQL_USER_PASSWORD

	- password for mysql MYSQL_USER user
	- example :: MYSQL_USER_PASSWORD=artifact@user

* MYSQL_DATABASE

	- database for store the server information
	- example :: MYSQL_DATABASE=artifact

* PORT_NO
    
    - port number for access the service
    - example :: PORT_NO=5566

==================
step 2)
==================

Inside the compose directory of the project, run the command.

	# docker-compose up

This command will build the 2 containers.
check in your web-browser ::
		http://ip-address:PORT_NO

The default username and passwords ::

    - username	:	admin
    - password	:	password



==================
step 3)
==================

* configure the server with help of the 'user guide' provided in the UI and the webpages described in the 'link' files in this repo.



==================
step 4)
==================

* once you have configured, install mvn in your system. for deploying something to maven repo use this syntax

For example let's take 'mysql-connector-java-5.1.24.jar' of your case:

```
mvn deploy:deploy-file
-Durl=http://ip-address:port-no/artifactory/repo-name
-DrepositoryId=internal
-Dfile=mysql-connector-java-5.1.24.jar
-DgroupId=mysql
-DartifactId=connector
-Dversion=5.1.24
```


In UI, the the repo structure should be like this ::

```
internal
|
|--mysql
| |
| |--connector
	|
	|--5.1.24
```



