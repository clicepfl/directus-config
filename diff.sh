#!/usr/bin/env bash

if ! command -v yq >/dev/null 2>&1; then
	echo "yq command could not be found"
	exit 1
fi

help() {
	echo "Usage: $0 <HEAD1> [HEAD2]"
	echo "Creates a clean diff for snapshot.yaml between HEAD1 and HEAD2"
	echo "If HEAD2 is not provided, defaults to the current HEAD"
}

TMP=$(mktemp -d /tmp/directus-diff-XXX)
echo "Using \"$TMP\" as temporary directory"

EMPTY="$TMP/empty"
echo '' >"$EMPTY"

if [ "$1" == "" ]; then
	help
	exit 1
fi

set -e

LEFT="$TMP/a.yaml"
RIGHT="$TMP/b.yaml"

git show "$1:snapshot.yaml" >"$LEFT"
LEFT_NAME="$1"

if [ "$2" == "" ]; then
	cp ./snapshot.yaml "$RIGHT"
	RIGHT_NAME="HEAD"
else
	git show $2:snapshot.yaml >"$RIGHT"
	RIGHT_NAME="$2"
fi

OUT="snapshot.yaml"

if ! git diff --exit-code -s "$OUT"; then
	echo "$OUT has unstaged changes, aborting"
	exit 1
fi

echo '' >"$OUT"

print_diff() {
	echo "For array \"$1\""
	echo -e "  Added by $LEFT_NAME:\n$(sed -e 's/^/  - /g' <<<"$2")\n"
	echo -e "  Added by $RIGHT_NAME:\n$(sed -e 's/^/  - /g' <<<"$3")\n"
}

merge_head() {
	local hlf="$TMP/head-left"
	local hrf="$TMP/head-right"

	head -n 3 "$LEFT" >"$hlf"
	head -n 3 "$RIGHT" >"$hrf"

	git merge-file -p "$hlf" "$EMPTY" "$hrf" >>"$OUT"
}

generate_diff() {
	echo "$5:" >>"$OUT"

	git merge-file -p "$1" "$EMPTY" "$2" >>"$OUT"

	echo "<<<<<<< $LEFT" >>"$OUT"
	cat "$3" >>"$OUT"
	echo "=======" >>"$OUT"
	echo ">>>>>>> $RIGHT" >>"$OUT"

	echo "<<<<<<< $LEFT" >>"$OUT"
	echo "=======" >>"$OUT"
	cat "$4" >>"$OUT"
	echo ">>>>>>> $RIGHT" >>"$OUT"
}

merge_array() {
	local name=$1
	local id=$2
	local sort=$3

	# Computes the list of unique identifers for each file.
	local left_ids=$(yq -rc ".$name | map($id)[]" <"$LEFT" | sort)
	local right_ids=$(yq -rc ".$name | map($id)[]" <"$RIGHT" | sort)

	# Stores the IDs into files.
	local lif="$TMP/${name}_left_ids"
	local rif="$TMP/${name}_right_ids"
	echo "$left_ids" >"$lif"
	echo "$right_ids" >"$rif"

	# Computes which ids are common, added by the left file or by the right file.
	local common=$(comm "$lif" "$rif" -12)
	local added_left=$(comm "$lif" "$rif" -23)
	local added_right=$(comm "$lif" "$rif" -13)

	print_diff "$name" "$added_left" "$added_right"

	local clf="$TMP/${name}_common_left"
	local crf="$TMP/${name}_common_right"
	local calf="$TMP/${name}_added_left"
	local carf="$TMP/${name}_added_right"

	# Filters all entries based on their origin.
	yq -yc "[.$name[] | select ($id == $(jq -R <<<"$common" | jq -sc)[])] | sort_by($sort)" <"$LEFT" | sed -e 's/^/  /g' >"$clf"
	yq -yc "[.$name[] | select ($id == $(jq -R <<<"$common" | jq -sc)[])] | sort_by($sort)" <"$RIGHT" | sed -e 's/^/  /g' >"$crf"
	yq -yc "[.$name[] | select ($id == $(jq -R <<<"$added_left" | jq -sc)[])]" <"$LEFT" | sed -e 's/^/  /g' >"$calf"
	yq -yc "[.$name[] | select ($id == $(jq -R <<<"$added_right" | jq -sc)[])]" <"$RIGHT" | sed -e 's/^/  /g' >"$carf"

	# Adds the entries to the diff.
	generate_diff "$clf" "$crf" "$calf" "$carf" "$name"
}

merge_array_1id() {
	merge_array "$1" ".$2" ".$2"
}

merge_array_2ids() {
	merge_array "$1" "[.$2, .$3] | join(\",\")" ".$id_field1, .$id_field2"
}

merge_head

merge_array_1id collections collection
merge_array_2ids fields collection field
merge_array_2ids relations collection related_collection

# Replaces strings with double-quotes marks and fixes escaped characters.
sed -i "s/'/\"/g" "$OUT"
sed -i $'s/\u00a0/\\\\_/g' "$OUT"
