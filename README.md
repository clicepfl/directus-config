# Directus

Directus is the content management system used for the website, as well as a few other services. It is ran in a separate Docker container.

The services requiring it use git submodules, this directly importing the [directus-config](https://github.com/clicepfl/directus-config) repository into their own.

## Developpement

Once the service has been deployed using `docker compose up`, you can import the data schema using `npm run load-directus` (or `sh directus-config/load.sh`), then populate it using sample data with `npm run populate-directus` (or `sh directus-config/populate.sh`). You only need to do this once, or if you have deleted Directus' data volume.

You can access the admin panel at http://localhost/directus (username: `clic@epfl.ch`, password: `1234`). There, you can update the data, or modify the schema (see below).

### Modifying the schema

If you wish to change the schema, you can do it on your local instance admin panel, then export it using `npm run save-directus` (or `sh directus-config/save.sh`). It will update the `snapshot.yaml` and the typescript declaration files in the `directus/` submodule. From this folder, create a new branch and upload the changes to a new branch on the [directus-config](https://github.com/clicepfl/directus-config) repository and open a PR.

You may also want to update the sample data: the files are automatically saved in `directus/uploads/`, and you can generate a dump of Directus' database using `npm run save-directus-data` (or `sh directus-config/save-data.sh`), which will write into `directus/new-dump.sql`. Then, copy the relevant insertions in the `directus/dump.sql` (take care of the order, to avoid constraint error during populate).

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
