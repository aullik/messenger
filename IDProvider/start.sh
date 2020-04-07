echo -e "\e[34m----------- Initializing Identity Provider ---------------\e[39m"
sudo docker stop keycloak &> /dev/null
sudo docker rm keycloak &> /dev/null
sudo docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin --name keycloak quay.io/keycloak/keycloak:9.0.2&
