#!/bin/sh
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

echo "[INFO] Creating data model snapshot"

docker exec -it $(directus_container) npx directus schema snapshot /share/snapshot.yaml -y

echo "[INFO] Generating typescript declarations"

docker exec -u root -it $(directus_container) npx directus-typescript-gen --email clic@epfl.ch --password 1234 -h http://127.0.0.1:8055 -o /share/schema.d.ts
mv $BASEDIR/schema.d.ts types/schema.d.ts

# Hard fix for singleton elements
sed -i -e 's/association: components\["schemas"\]\["ItemsAssociation"\]\[\]/association: components\["schemas"\]\["ItemsAssociation"\]/' types/schema.d.ts

npx prettier --write types/schema.d.ts $BASEDIR/snapshot.yaml
