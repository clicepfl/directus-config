#!/bin/sh
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

docker exec -it $(database_container) pg_dump -U directus_user --column-inserts --data-only directus_data > $BASEDIR/new-dump.sql
echo '[INFO]: Database dump saved at "directus/new-dump.sql"'
echo '[INFO]: Please make sure to only copy the relevant inserts into directus/dump.sql'