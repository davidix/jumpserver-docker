## Jumpserver Docker-Compose

-Fully support arm64 localized operating system

system structure
-[x] Linux/amd64
-[x] Linux/arm64

Environmental requirements
-MySQL Server >= 5.7
-Redis Server >= 5.0

Rapid deployment
```sh
# Test environment can be used, external data is recommended for production environment
git clone --depth=1 https://github.com/davidix/jumpserver-docker.git
cd Dockerfile
cp config_example.conf .env
docker-compose -f docker-compose-redis.yml -f docker-compose-mariadb.yml -f docker-compose.yml up
```

Standard deployment

> Please create your own database and Redis first, please refer to the above environmental requirements for version requirements

```sh
# Deploy MySQL by yourself (https://docs.jumpserver.org/en/master/install/setup_by_lb/#mysql)
# mysql Create a user and grant permissions, please replace nu4x599Wq7u0Bn8EABh3J91G with your own password
mysql -u root -p
```

```mysql
create database jumpserver default charset'utf8';
create user'jumpserver'@'%' identified by'nu4x599Wq7u0Bn8EABh3J91G';
grant all on jumpserver.* to'jumpserver'@'%';
flush privileges;
```

```sh
# Deploy Redis by yourself (https://docs.jumpserver.org/zh/master/install/setup_by_lb/#redis)
```

```sh
git clone --depth=1 https://github.com/wojiushixiaobai/Dockerfile.git
cd Dockerfile
cp config_example.conf .env
vi .env
```
```vim
# The version number can be modified according to the version of the project
Version=v2.16.3

# Compose
COMPOSE_PROJECT_NAME=jms
COMPOSE_HTTP_TIMEOUT=3600
DOCKER_CLIENT_TIMEOUT=3600
DOCKER_SUBNET=172.16.238.0/24

# MySQL # Fill in your Mysql server information
DB_HOST=192.168.100.11
DB_PORT=3306
DB_USER=jumpserver
DB_PASSWORD=nu4x599Wq7u0Bn8EABh3J91G
DB_NAME=jumpserver

# Redis # Fill in your Redis server information
REDIS_HOST=192.168.100.12
REDIS_PORT=6379
REDIS_PASSWORD=8URXPL2x3HZMi7xoGTdk3Upj

# Core
SECRET_KEY=B3f2w8P2PfxIAS7s4URrD9YmSbtqX4vXdPUL217kL9XPUOWrmy
BOOTSTRAP_TOKEN=7Q11Vz6R2J6BLAdO
DEBUG=FALSE
LOG_LEVEL=ERROR

##
# SECRET_KEY The key to protect the signed data. Please be sure to modify it during the first installation and keep in mind that subsequent upgrades and migrations cannot be changed, otherwise the encrypted data will not be decryptable.
# BOOTSTRAP_TOKEN is the key used for component authentication, which is only used for component registration. Components refer to koko, guacamole
```
```sh
docker-compose up
```

build
```sh
# If you want to build the image manually, you can use the following command
cd Dockerfile
cp config_example.conf .env
vi .env
```
```vim
# Build parameters, support amd64/arm64
TARGETARCH=amd64
```
```bash
docker-compose -f docker-compose-build.yml up
```