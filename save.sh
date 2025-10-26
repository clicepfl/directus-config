#!/bin/bash
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

sort() {
	tmp=$(mktemp sorting-XXX)
	jq "sort_by($1, ._syncId)" $2 > $tmp
	mv $tmp $2
}

pushd $BASEDIR
npx directus-sync pull

sort '.flow, .position_x, .position_y' directus-config/collections/operations.json
sort '.policy' directus-config/collections/permissions.json
popd

docker exec -u root -it $(directus_container) npx -y directus-typescript-gen --email clic@epfl.ch --password 1234 -h http://127.0.0.1:8055 -o /share/schema.d.ts
mv -f $BASEDIR/schema.d.ts $BASEDIR/types/schema.d.ts

# Hard fix for singleton elements
sed -i -e 's/association: components\["schemas"\]\["ItemsAssociation"\]\[\]/association: components\["schemas"\]\["ItemsAssociation"\]/' $BASEDIR/types/schema.d.ts

npx prettier --write $BASEDIR/types/schema.d.ts $BASEDIR/snapshot.yaml
