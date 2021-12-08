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
cd jumpserver-docker
cp config_example.conf .env
docker-compose -f docker-compose-redis.yml -f docker-compose-mariadb.yml -f docker-compose.yml up
```