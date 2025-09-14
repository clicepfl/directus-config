#!/usr/bin/env bash

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

git show $1:snapshot.yaml > "$LEFT"

if [ "$2" == "" ]; then
    cp ./snapshot.yaml "$RIGHT"
else
    git show $2:snapshot.yaml > "$RIGHT"
fi

OUT="snapshot.yaml"
echo '' >"$OUT"


print_diff() {
	echo "For array $1"
	echo -e "  Added by left:\n$(sed -e 's/^/  - /g' <<<"$2")\n"
	echo -e "  Added by right:\n$(sed -e 's/^/  - /g' <<<"$3")\n"
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
	local id_field=$2

	# Computes the list of unique identifers for each file.
	local left_ids=$(yq -rc ".$name[].$id_field" <"$LEFT" | sort)
	local right_ids=$(yq -rc ".$name[].$id_field" <"$RIGHT" | sort)

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

	local clf="$TMP/common_left"
	local crf="$TMP/common_right"
	local calf="$TMP/added_left"
	local carf="$TMP/added_right"

	# Filters all entries based on their origin.
	yq -yc "[.$name[] | select (.$id_field == $(jq -R <<<"$common" | jq -sc)[])]" <"$LEFT" | sed -e 's/^/  /g' >"$clf"
	yq -yc "[.$name[] | select (.$id_field == $(jq -R <<<"$common" | jq -sc)[])]" <"$RIGHT" | sed -e 's/^/  /g' >"$crf"
	yq -yc "[.$name[] | select (.$id_field == $(jq -R <<<"$added_left" | jq -sc)[])]" <"$LEFT" | sed -e 's/^/  /g' >"$calf"
	yq -yc "[.$name[] | select (.$id_field == $(jq -R <<<"$added_right" | jq -sc)[])]" <"$RIGHT" | sed -e 's/^/  /g' >"$carf"

	# Adds the entries to the diff.
	generate_diff "$clf" "$crf" "$calf" "$carf" "$name"
}

merge_array_2ids() {
	local name=$1
	local id_field1=$2
	local id_field2=$3

	# Computes the list of unique identifers for each file.
	# Since there are two ids, they are concatenated with a "," as separator.
	local left_ids=$(yq -rc ".$name | map([.$id_field1, .$id_field2] | join(\",\"))[]" <"$LEFT" | sort)
	local right_ids=$(yq -rc ".$name | map([.$id_field1, .$id_field2] | join(\",\"))[]" <"$RIGHT" | sort)

	local lif="$TMP/${name}_left_ids"
	local rif="$TMP/${name}_right_ids"
	echo "$left_ids" >"$lif"
	echo "$right_ids" >"$rif"

	# Computes which ids are common, added by the left file or by the right file.
	local common=$(comm "$lif" "$rif" -12)
	local added_left=$(comm "$lif" "$rif" -23)
	local added_right=$(comm "$lif" "$rif" -13)

	print_diff "$name" "$added_left" "$added_right"

	local clf="$TMP/common_left"
	local crf="$TMP/common_right"
	local calf="$TMP/added_left"
	local carf="$TMP/added_right"

	# Filters all entries based on their origin.
	yq -yc "[.$name[] | select ([.$id_field1, .$id_field2] | join(\",\") == $(jq -R <<<"$common" | jq -sc)[])]" <"$LEFT" | sed -e 's/^/  /g' >"$clf"
	yq -yc "[.$name[] | select ([.$id_field1, .$id_field2] | join(\",\") == $(jq -R <<<"$common" | jq -sc)[])]" <"$RIGHT" | sed -e 's/^/  /g' >"$crf"
	yq -yc "[.$name[] | select ([.$id_field1, .$id_field2] | join(\",\") == $(jq -R <<<"$added_left" | jq -sc)[])]" <"$LEFT" | sed -e 's/^/  /g' >"$calf"
	yq -yc "[.$name[] | select ([.$id_field1, .$id_field2] | join(\",\") == $(jq -R <<<"$added_right" | jq -sc)[])]" <"$RIGHT" | sed -e 's/^/  /g' >"$carf"

	# Adds the entries to the diff.
	generate_diff "$clf" "$crf" "$calf" "$carf" "$name"
}

merge_head

merge_array collections collection
merge_array_2ids fields collection field
merge_array_2ids relations collection related_collection
