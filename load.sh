#!/bin/bash
BASEDIR=$(dirname "$0")

pushd $BASEDIR
npx directus-sync push
popd
