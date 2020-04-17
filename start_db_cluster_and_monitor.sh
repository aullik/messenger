#!/usr/bin/env bash
docker-compose -f metric/docker-compose.yml -f database/docker-compose.yml -f IDProvider/docker-compose.yml -f docker-compose.dev.yml -p proj up
cd metric && docker-compose down && cd ..
cd database && docker-compose down && cd ..
cd IDProvider && docker-compose down && cd ..
