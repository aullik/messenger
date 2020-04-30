#!/usr/bin/env bash
if [ -z ${DOCKER_PASSWORD+x} ] && [ -z ${DOCKER_USERNAME+x} ]; then
    echo "docker username or password missing"
    return 1
fi
docker build -t enatrox/cloud-project-frontend:latest .
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push enatrox/cloud-project-frontend:latest
