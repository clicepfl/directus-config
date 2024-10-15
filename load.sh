#!/bin/sh
BASEDIR=$(dirname "$0")

docker exec -i clic-directus npx directus schema apply /share/snapshot.yaml -y
docker exec -i clic-postgres psql --user directus_user directus_data < $BASEDIR/flows.sql
