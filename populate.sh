#!/bin/sh
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

docker exec -i $(database_container) psql --user directus_user directus_data < $BASEDIR/dump.sql

# Restarts directus to reload the permission table
docker restart $(directus_container)

echo Restarting Directus container
