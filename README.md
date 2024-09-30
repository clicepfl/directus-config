# Directus

Directus is the content management system used for the website, as well as a few other services. It is ran in a separate Docker container.

The services requiring it use git submodules, this directly importing the [directus-config](https://github.com/clicepfl/directus-config) repository into their own.

## Development

> [!IMPORTANT]
> If you are running directus as part of another service, the shell script will be located in the directus submodule, or as aliases in the `npm run ---`. The command to boot the instance will also be different, see [this document](../README.md).

### Starting the instance

First, use `docker compose up` to boot up a local instance. Then, you can import the data schema using `sh load.sh` and populate it using sample data with `sh populate.sh`. You only need to do this once, or if you have deleted Directus' data volume.

You can access the admin panel at <http://localhost/directus> (username: `clic@epfl.ch`, password: `1234`). There, you can update the data, or modify the schema (see below).

### Modifying the schema

If you wish to change the schema, you can do it on your local instance admin panel, then export it using `sh save.sh`. It will create a `snapshot.yaml` file in the `directus/` folder. You should then upload this file to the [infrastructure repo](https://github.com/clicepfl/clic-infra) through a PR. You will also need to commit `app/src/types/schema.d.ts` and you may add aliases for useful types in `app/src/types/aliases.ts`.

You may also want to update the sample data: the files are automatically saved in `directus/uploads/`, and you can generate a dump of Directus' database using `sh save-data.sh`, which will write into `directus/new-dump.sql`. Then, copy the relevant insertions in the `directus/dump.sql` (take care of the order, to avoid constraint error during populate).

## Setting up Directus in a new repository

If you wish to integrate Directus into a new project, you need to:

1. Add the submodule: `git submodule add https://github.com/clicepfl/directus-config.git directus`
2. Add the following scripts to the `package.json`:

   ```json
   {
     "scripts": {
       "prepare": "git submodule update --init",
       "load-directus": "sh directus/load.sh",
       "save-directus": "sh directus/save.sh",
       "save-directus-data": "sh directus/save-data.sh",
       "populate-directus": "sh directus/populate.sh"
     }
   }
   ```

3. Include the local instance in the developpment Docker Compose file:

   ```yaml
   include:
     - path: directus/docker-compose.yaml
   ```

4. Create a symbolic link for the types declarations (from your `src/` folder):

   ```sh
   ln -sr <relative-path-of-directus-submodule>/types types
   ```
