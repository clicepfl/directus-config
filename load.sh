#!/bin/sh
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

docker exec -i $(directus_container) npx directus schema apply /share/snapshot.yaml -y
docker exec -i $(database_container) psql --user directus_user directus_data < $BASEDIR/flows.sql
docker restart $(directus_container)
