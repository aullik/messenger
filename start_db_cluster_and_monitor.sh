#!/usr/bin/env bash
docker-compose -f metric/docker-compose.yml -f database/docker-compose.yml -p proj up
cd metric && docker-compose down && cd ..
