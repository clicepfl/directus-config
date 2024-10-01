#!/bin/sh
BASEDIR=$(dirname "$0")

echo "[INFO] Creating data model snapshot"

docker exec -it clic-directus npx directus schema snapshot /share/snapshot.yaml -y

echo "[INFO] Generating typescript declarations"

docker exec -u root -it clic-directus npx directus-typescript-gen --email clic@epfl.ch --password 1234 -h http://127.0.0.1:8055 -o /share/schema.d.ts

# Hard fix for singleton elements
sed -i -e 's/association: components\["schemas"\]\["ItemsAssociation"\]\[\]/association: components\["schemas"\]\["ItemsAssociation"\]/' $BASEDIR/schema.d.ts
mv -f $BASEDIR/schema.d.ts $BASEDIR/types/schema.d.ts

npx prettier --write $BASEDIR/types/schema.d.ts $BASEDIR/snapshot.yaml
