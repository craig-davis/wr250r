#!/bin/bash

if [ "$1" == 'build' ]; then
	sudo docker build -t wr250r .
elif [ "$1" == 'run' ]; then
	sudo docker run -d --name="wr250r" `cat settings.txt` wr250r
elif [ "$1" == 'kill' ]; then
	sudo docker stop "$2"
	sudo docker rm "$2"
else
	echo 'Usage: ./docker.sh [build|run]'
fi

