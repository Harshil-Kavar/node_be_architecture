#!/usr/bin/env bash
kill -9 $(lsof -i:27020 -t) 2> /dev/null
kill -9 $(lsof -i:9300 -t) 2> /dev/null
kill -9 $(lsof -i:3001 -t) 2> /dev/null
kill -9 $(lsof -i:6379 -t) 2> /dev/null

ssh -fNt -L 27020:localhost:27017 prod@172.105.119.244
ssh -fNt -L 9300:localhost:4210 prod@172.105.119.244
ssh -fNt -L 5499:localhost:5432 prod@35.200.226.51

yarn start serve
