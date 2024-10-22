find_container() {
    label=$1
    ids=$(docker ps --filter label=org.clic.type=$label -q)

    if [ $(wc -w <<<"$ids") != 1 ]; then
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
