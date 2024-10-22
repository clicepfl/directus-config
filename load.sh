#!/bin/sh
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

docker exec -i $(directus_container) npx directus schema apply /share/snapshot.yaml -y
docker restart $(directus_container)
