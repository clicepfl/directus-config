#!/bin/bash
BASEDIR=$(dirname "$0")
source $BASEDIR/utils.sh

pushd $BASEDIR
npx directus-sync pull

pushd generation
npm i
npm run gen \
	http://localhost/directus/server/specs/oas \
	00000000-0000-0000-0000-000000000000 \
	association,subsonic,save_the_date,game_star \
	../types/schema.d.ts
popd

npx prettier --write $BASEDIR/types/schema.d.ts $BASEDIR/snapshot.yaml

popd
