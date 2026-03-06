find_container() {
    label=$1
    ids=$(docker ps --filter label=org.clic.type=$label -q)

    if [ $(wc -w <<< "$ids") != 1 ]; then
        echo "Multiple or no containers running with label org.clic.type=$label: $ids"
        echo "This script can only be used when a single container with this label is running"
        exit 1
    fi

    echo $ids
}

directus_container() {
    echo $(find_container directus)
}

database_container() {
    echo $(find_container directus-postgres)
}

# Prints an error message on stderr.
#
# - $1: Message to print. It will be broken down line by line and appended to `[ERROR]`.
# - $2: Added between the `[ERROR]` and the message's line, mainly for indentation.
error() {
    while read -r line; do
        printf "[\033[1;31mERROR\033[0m] $2$line\n" 1>&2
    done <<< "$1"
}
