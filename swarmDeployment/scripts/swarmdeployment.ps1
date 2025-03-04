
# initiale the swarm
docker swarm init

# create volumes for sqlserver,prometheus and grafana
docker volume create --name=employeedata
docker volume create --name=prometheus_data
docker volume create --name=grafana_storage

# deploy the stack
docker stack deploy -c deployment.compose.yaml employeestack