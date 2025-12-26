#!/usr/bin/env bash
fuser -k 3001/tcp
fuser -k 27020/tcp
fuser -k 9301/tcp
fuser -k 5499/tcp
fuser -k 4601/tcp

ssh -fNt -L 27020:localhost:27017 prod@172.105.119.244
ssh -fNt -L 9301:localhost:4210 prod@172.105.119.244
ssh -fNt -L 5499:localhost:5432 prod@35.200.226.51
ssh -fNt -L 4601:localhost:4601 prod@172.105.119.244

yarn start serve
# http://localhost:4601/app/kibana
