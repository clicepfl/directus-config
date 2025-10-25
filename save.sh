#!/bin/bash
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

pushd $BASEDIR
npx directus-sync pull
popd

docker exec -u root -it $(directus_container) npx -y directus-typescript-gen --email clic@epfl.ch --password 1234 -h http://127.0.0.1:8055 -o /share/schema.d.ts
docker cp $(directus_container):/share/schema.d.ts $BASEDIR/types/schema.d.ts

# Hard fix for singleton elements
sed -i -e 's/association: components\["schemas"\]\["ItemsAssociation"\]\[\]/association: components\["schemas"\]\["ItemsAssociation"\]/' $BASEDIR/types/schema.d.ts

npx prettier --write $BASEDIR/types/schema.d.ts $BASEDIR/snapshot.yaml
