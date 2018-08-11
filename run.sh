docker rm -f test
ip=$(docker run -d -v $(pwd):/usr/src/app/ --name=test test:latest)
echo $(docker inspect --format '{{ .NetworkSettings.IPAddress }}' $ip)
