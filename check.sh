#!/bin/bash

DIR="$(dirname $0)"
TRANSLATIONS="$DIR/directus-config/collections/translations.json"
PERMISSIONS="$DIR/directus-config/collections/permissions.json"
source "$DIR/utils.sh"

command -v jq &> /dev/null || (
    error "Missing jq"
    exit 1
)

ret=0

translations_duplicates=$(jq 'group_by([.key, .language]) | map(length) | max' < "$TRANSLATIONS")
if [ "$translations_duplicates" != "1" ]; then
    error "Found translations duplicates:"
    error "$(jq -r 'map([.key, .language]) | group_by(.) | map(select(. | length > 1)) | map(.[0][0] + ", " + .[0][1]) | .[]' < "$TRANSLATIONS")" "  "
	ret=1
fi

permissions_duplicates=$(jq 'group_by([.collection, .action, .policy]) | map(length) | max' < "$PERMISSIONS")
if [ "$permissions_duplicates" != "1" ]; then
    error "Found permissions duplicates:"
    error "$(jq -r 'map([.collection, .action, .policy]) | group_by(.) | map(select(. | length > 1)) | map(.[0][0] + "." + .[0][1] + " for policy " + .[0][2]) | .[]' < "$PERMISSIONS")" "  "
	ret=1
fi

exit $ret
