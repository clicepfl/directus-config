export interface paths {
  "/assets/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get an Asset
     * @description Image typed files can be dynamically resized and transformed to fit any need.
     */
    get: operations["getAsset"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/login": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Retrieve a Temporary Access Token
     * @description Retrieve a Temporary Access Token
     */
    post: operations["login"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/refresh": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Refresh Token
     * @description Refresh a Temporary Access Token.
     */
    post: operations["refresh"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/logout": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Log Out
     * @description Log Out
     */
    post: operations["logout"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/password/request": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Request a Password Reset
     * @description Request a reset password email to be send.
     */
    post: operations["passwordRequest"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/password/reset": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Reset a Password
     * @description The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.
     */
    post: operations["passwordReset"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/oauth": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List OAuth Providers
     * @description List configured OAuth providers.
     */
    get: operations["oauth"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/auth/oauth/{provider}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Authenticated using an OAuth provider
     * @description Start OAuth flow using the specified provider
     */
    get: operations["oauthProvider"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/schema/snapshot": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve Schema Snapshot
     * @description Retrieve the current schema. This endpoint is only available to admin users.
     */
    get: operations["schemaSnapshot"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/schema/apply": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Apply Schema Difference
     * @description Update the instance's schema by passing the diff previously retrieved via `/schema/diff` endpoint in the JSON request body or a JSON/YAML file. This endpoint is only available to admin users.
     */
    post: operations["schemaApply"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/schema/diff": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Retrieve Schema Difference
     * @description Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.
     */
    post: operations["schemaDiff"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/server/info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * System Info
     * @description Perform a system status check and return the options.
     */
    get: operations["serverInfo"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/server/ping": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Ping
     * @description Ping, pong. Ping.. pong.
     */
    get: operations["ping"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/utils/hash/generate": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Hash a string
     * @description Generate a hash for a given string.
     */
    post: operations["hash-generate"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/utils/hash/verify": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Hash a string
     * @description Generate a hash for a given string.
     */
    post: operations["hash-verify"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/utils/sort/{collection}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Sort Items
     * @description Re-sort items in collection based on start and to value of item
     */
    post: operations["sort"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/utils/import/{collection}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Import Items
     * @description Import multiple records from a JSON or CSV file into a collection.
     */
    post: operations["import"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/utils/export/{collection}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Export Items
     * @description Export a larger data set to a file in the File Library
     */
    post: operations["export"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/utils/cache/clear": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Clear Cache
     * @description Resets both the data and schema cache of Directus.
     */
    post: operations["clear-cache"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/utils/random/string": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get a Random String
     * @description Returns a random string of given length.
     */
    get: operations["random"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/activity": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Activity Actions
     * @description Returns a list of activity actions.
     */
    get: operations["getActivities"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/activity/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Activity Action
     * @description Retrieves the details of an existing activity action. Provide the primary key of the activity action and Directus will return the corresponding information.
     */
    get: operations["getActivity"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/permissions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Permissions
     * @description List all permissions.
     */
    get: operations["getPermissions"];
    put?: never;
    /**
     * Create a Permission
     * @description Create a new permission.
     */
    post: operations["createPermission"];
    /**
     * Delete Multiple Permissions
     * @description Delete multiple existing permissions.
     */
    delete: operations["deletePermissions"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Permissions
     * @description Update multiple permissions at the same time.
     */
    patch: operations["updatePermissions"];
    trace?: never;
  };
  "/permissions/me": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List My Permissions
     * @description List the permissions that apply to the current user.
     */
    get: operations["getMyPermissions"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/permissions/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Permission
     * @description Retrieve a single permissions object by unique identifier.
     */
    get: operations["getPermission"];
    put?: never;
    post?: never;
    /**
     * Delete a Permission
     * @description Delete an existing permission
     */
    delete: operations["deletePermission"];
    options?: never;
    head?: never;
    /**
     * Update a Permission
     * @description Update an existing permission
     */
    patch: operations["updatePermission"];
    trace?: never;
  };
  "/fields": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List All Fields
     * @description Returns a list of the fields available in the project.
     */
    get: operations["getFields"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/fields/{collection}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Fields in Collection
     * @description Returns a list of the fields available in the given collection.
     */
    get: operations["getCollectionFields"];
    put?: never;
    /**
     * Create Field in Collection
     * @description Create a new field in a given collection.
     */
    post: operations["createField"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/fields/{collection}/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Field
     * @description Retrieves the details of a single field in a given collection.
     */
    get: operations["getCollectionField"];
    put?: never;
    post?: never;
    /**
     * Delete a Field
     * @description Delete an existing field.
     */
    delete: operations["deleteField"];
    options?: never;
    head?: never;
    /**
     * Update a Field
     * @description Update an existing field.
     */
    patch: operations["updateField"];
    trace?: never;
  };
  "/files": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Files
     * @description List the files.
     */
    get: operations["getFiles"];
    put?: never;
    /**
     * Create a File
     * @description Create a new file
     */
    post: operations["createFile"];
    /**
     * Delete Multiple Files
     * @description Delete multiple existing files.
     */
    delete: operations["deleteFiles"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Files
     * @description Update multiple files at the same time.
     */
    patch: operations["updateFiles"];
    trace?: never;
  };
  "/files/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Files
     * @description Retrieve a single file by unique identifier.
     */
    get: operations["getFile"];
    put?: never;
    post?: never;
    /**
     * Delete a File
     * @description Delete an existing file.
     */
    delete: operations["deleteFile"];
    options?: never;
    head?: never;
    /**
     * Update a File
     * @description Update an existing file, and/or replace it's file contents.
     */
    patch: operations["updateFile"];
    trace?: never;
  };
  "/collections": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Collections
     * @description Returns a list of the collections available in the project.
     */
    get: operations["getCollections"];
    put?: never;
    /**
     * Create a Collection
     * @description Create a new collection in Directus.
     */
    post: operations["createCollection"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/collections/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Collection
     * @description Retrieves the details of a single collection.
     */
    get: operations["getCollection"];
    put?: never;
    post?: never;
    /**
     * Delete a Collection
     * @description Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.
     */
    delete: operations["deleteCollection"];
    options?: never;
    head?: never;
    /**
     * Update a Collection
     * @description Update an existing collection.
     */
    patch: operations["updateCollection"];
    trace?: never;
  };
  "/folders": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Folders
     * @description List the folders.
     */
    get: operations["getFolders"];
    put?: never;
    /**
     * Create a Folder
     * @description Create a new folder.
     */
    post: operations["createFolder"];
    /**
     * Delete Multiple Folders
     * @description Delete multiple existing folders.
     */
    delete: operations["deleteFolders"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Folders
     * @description Update multiple folders at the same time.
     */
    patch: operations["updateFolders"];
    trace?: never;
  };
  "/folders/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Folder
     * @description Retrieve a single folder by unique identifier.
     */
    get: operations["getFolder"];
    put?: never;
    post?: never;
    /**
     * Delete a Folder
     * @description Delete an existing folder
     */
    delete: operations["deleteFolder"];
    options?: never;
    head?: never;
    /**
     * Update a Folder
     * @description Update an existing folder
     */
    patch: operations["updateFolder"];
    trace?: never;
  };
  "/users": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Users
     * @description List the users.
     */
    get: operations["getUsers"];
    put?: never;
    /**
     * Create a User
     * @description Create a new user.
     */
    post: operations["createUser"];
    /**
     * Delete Multiple Users
     * @description Delete multiple existing users.
     */
    delete: operations["deleteUsers"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Users
     * @description Update multiple users at the same time.
     */
    patch: operations["updateUsers"];
    trace?: never;
  };
  "/users/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a User
     * @description Retrieve a single user by unique identifier.
     */
    get: operations["getUser"];
    put?: never;
    post?: never;
    /**
     * Delete a User
     * @description Delete an existing user
     */
    delete: operations["deleteUser"];
    options?: never;
    head?: never;
    /**
     * Update a User
     * @description Update an existing user
     */
    patch: operations["updateUser"];
    trace?: never;
  };
  "/users/invite": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Invite User(s)
     * @description Invites one or more users to this project. It creates a user with an invited status, and then sends an email to the user with instructions on how to activate their account.
     */
    post: operations["invite"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/invite/accept": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Accept User Invite
     * @description Accepts and enables an invited user using a JWT invitation token.
     */
    post: operations["acceptInvite"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/me": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve Current User
     * @description Retrieve the currently authenticated user.
     */
    get: operations["getMe"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Update Current User
     * @description Update the currently authenticated user.
     */
    patch: operations["updateMe"];
    trace?: never;
  };
  "/users/me/track/page": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Update Last Page
     * @description Updates the last used page field of the currently authenticated user. This is used internally to be able to open the Directus admin app from the last page you used.
     */
    patch: operations["updateLastUsedPageMe"];
    trace?: never;
  };
  "/users/me/tfa/enable": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Enable 2FA
     * @description Enables two-factor authentication for the currently authenticated user.
     */
    post: operations["meTfaEnable"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/users/me/tfa/disable": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Disable 2FA
     * @description Disables two-factor authentication for the currently authenticated user.
     */
    post: operations["meTfaDisable"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/roles": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Roles
     * @description List the roles.
     */
    get: operations["getRoles"];
    put?: never;
    /**
     * Create a Role
     * @description Create a new role.
     */
    post: operations["createRole"];
    /**
     * Delete Multiple Roles
     * @description Delete multiple existing roles.
     */
    delete: operations["deleteRoles"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Roles
     * @description Update multiple roles at the same time.
     */
    patch: operations["updateRoles"];
    trace?: never;
  };
  "/roles/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Role
     * @description Retrieve a single role by unique identifier.
     */
    get: operations["getRole"];
    put?: never;
    post?: never;
    /**
     * Delete a Role
     * @description Delete an existing role
     */
    delete: operations["deleteRole"];
    options?: never;
    head?: never;
    /**
     * Update a Role
     * @description Update an existing role
     */
    patch: operations["updateRole"];
    trace?: never;
  };
  "/presets": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Presets
     * @description List the presets.
     */
    get: operations["getPresets"];
    put?: never;
    /**
     * Create a Preset
     * @description Create a new preset.
     */
    post: operations["createPreset"];
    /**
     * Delete Multiple Presets
     * @description Delete multiple existing presets.
     */
    delete: operations["deletePresets"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Presets
     * @description Update multiple presets at the same time.
     */
    patch: operations["updatePresets"];
    trace?: never;
  };
  "/presets/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Preset
     * @description Retrieve a single preset by unique identifier.
     */
    get: operations["getPreset"];
    put?: never;
    post?: never;
    /**
     * Delete a Preset
     * @description Delete an existing preset.
     */
    delete: operations["deletePreset"];
    options?: never;
    head?: never;
    /**
     * Update a Preset
     * @description Update an existing preset.
     */
    patch: operations["updatePreset"];
    trace?: never;
  };
  "/relations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Relations
     * @description List the relations.
     */
    get: operations["getRelations"];
    put?: never;
    /**
     * Create a Relation
     * @description Create a new relation.
     */
    post: operations["createRelation"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/relations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Relation
     * @description Retrieve a single relation by unique identifier.
     */
    get: operations["getRelation"];
    put?: never;
    post?: never;
    /**
     * Delete a Relation
     * @description Delete an existing relation.
     */
    delete: operations["deleteRelation"];
    options?: never;
    head?: never;
    /**
     * Update a Relation
     * @description Update an existing relation
     */
    patch: operations["updateRelation"];
    trace?: never;
  };
  "/revisions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Revisions
     * @description List the revisions.
     */
    get: operations["getRevisions"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/revisions/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Revision
     * @description Retrieve a single revision by unique identifier.
     */
    get: operations["getRevision"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/flows": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Flows
     * @description Get all flows.
     */
    get: operations["getFlows"];
    put?: never;
    /**
     * Create a Flow
     * @description Create a new flow.
     */
    post: operations["createFlow"];
    /**
     * Delete Multiple Flows
     * @description Delete multiple existing flows.
     */
    delete: operations["deleteFlows"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Flows
     * @description Update multiple flows at the same time.
     */
    patch: operations["updateFlows"];
    trace?: never;
  };
  "/flows/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Flow
     * @description Retrieve a single flow by unique identifier.
     */
    get: operations["getFlow"];
    put?: never;
    post?: never;
    /**
     * Delete a Flow
     * @description Delete an existing flow
     */
    delete: operations["deleteFlow"];
    options?: never;
    head?: never;
    /**
     * Update a Flow
     * @description Update an existing flow
     */
    patch: operations["updateFlow"];
    trace?: never;
  };
  "/operations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Operations
     * @description Get all operations.
     */
    get: operations["getOperations"];
    put?: never;
    /**
     * Create an Operation
     * @description Create a new operation.
     */
    post: operations["createOperation"];
    /**
     * Delete Multiple Operations
     * @description Delete multiple existing operations.
     */
    delete: operations["deleteOperations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Operations
     * @description Update multiple operations at the same time.
     */
    patch: operations["updateOperations"];
    trace?: never;
  };
  "/operations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Operation
     * @description Retrieve a single operation by unique identifier.
     */
    get: operations["getOperation"];
    put?: never;
    post?: never;
    /**
     * Delete an Operation
     * @description Delete an existing operation
     */
    delete: operations["deleteOperation"];
    options?: never;
    head?: never;
    /**
     * Update an Operation
     * @description Update an existing operation
     */
    patch: operations["updateOperation"];
    trace?: never;
  };
  "/webhooks": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Webhooks
     * @description Get all webhooks.
     */
    get: operations["getWebhooks"];
    put?: never;
    /**
     * Create a Webhook
     * @description Create a new webhook.
     */
    post: operations["createWebhook"];
    /**
     * Delete Multiple Webhooks
     * @description Delete multiple existing webhooks.
     */
    delete: operations["deleteWebhooks"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Webhooks
     * @description Update multiple webhooks at the same time.
     */
    patch: operations["updateWebhooks"];
    trace?: never;
  };
  "/webhooks/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Webhook
     * @description Retrieve a single webhook by unique identifier.
     */
    get: operations["getWebhook"];
    put?: never;
    post?: never;
    /**
     * Delete a Webhook
     * @description Delete an existing webhook
     */
    delete: operations["deleteWebhook"];
    options?: never;
    head?: never;
    /**
     * Update a Webhook
     * @description Update an existing webhook
     */
    patch: operations["updateWebhook"];
    trace?: never;
  };
  "/extensions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Extensions
     * @description List the installed extensions and their configuration in the project.
     */
    get: operations["listExtensions"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/extensions/{name}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Update an Extension
     * @description Update an existing extension.
     */
    patch: operations["updateExtensions"];
    trace?: never;
  };
  "/extensions/{bundle}/{name}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Update an Extension
     * @description Update an existing extension.
     */
    patch: operations["updateExtensionBundle"];
    trace?: never;
  };
  "/versions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Content Versions
     * @description Get all Content Versions.
     */
    get: operations["getContentVersions"];
    put?: never;
    /**
     * Create Multiple Content Versions
     * @description Create multiple new Content Versions.
     */
    post: operations["createContentVersion"];
    /**
     * Delete Multiple Content Versions
     * @description Delete multiple existing Content Versions.
     */
    delete: operations["deleteContentVersions"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Content Versions
     * @description Update multiple Content Versions at the same time.
     */
    patch: operations["updateContentVersions"];
    trace?: never;
  };
  "/versions/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Content Version
     * @description Retrieve a single Content Version by unique identifier.
     */
    get: operations["getContentVersion"];
    put?: never;
    post?: never;
    /**
     * Delete a Content Version
     * @description Delete an existing Content Version.
     */
    delete: operations["deleteContentVersion"];
    options?: never;
    head?: never;
    /**
     * Update a Content Version
     * @description Update an existing Content Version.
     */
    patch: operations["updateContentVersion"];
    trace?: never;
  };
  "/versions/{id}/save": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Save to a Content Version
     * @description Save item changes to an existing Content Version.
     */
    post: operations["saveContentVersion"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/versions/{id}/compare": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Compare a Content Version
     * @description Compare an existing Content Version with the main version of the item.
     */
    get: operations["compareContentVersion"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/versions/{id}/promote": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
     * Promote a Content Version
     * @description Pass the current hash of the main version of the item (obtained from the `compare` endpoint) along with an optional array of field names of which the values are to be promoted (by default, all fields are selected).
     */
    post: operations["promoteContentVersion"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Comments
     * @description List the comments.
     */
    get: operations["getComments"];
    put?: never;
    /**
     * Create a Comment
     * @description Create a new comment.
     */
    post: operations["createComment"];
    /**
     * Delete Multiple Comments
     * @description Delete multiple existing comments.
     */
    delete: operations["deleteComments"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Comments
     * @description Update multiple comments at the same time.
     */
    patch: operations["updateComments"];
    trace?: never;
  };
  "/comments/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve a Comment
     * @description Retrieve a single comment by unique identifier.
     */
    get: operations["getComment"];
    put?: never;
    post?: never;
    /**
     * Delete a Comment
     * @description Delete an existing comment.
     */
    delete: operations["deleteComment"];
    options?: never;
    head?: never;
    /**
     * Update a Comment
     * @description Update an existing comment.
     */
    patch: operations["updateComment"];
    trace?: never;
  };
  "/settings": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve Settings
     * @description List the settings.
     */
    get: operations["getSettings"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    /**
     * Update Settings
     * @description Update the settings
     */
    patch: operations["updateSetting"];
    trace?: never;
  };
  "/items/directus_sync_id_map": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the directus_sync_id_map items.
     */
    get: operations["readItemsDirectusSyncIDMap"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new directus_sync_id_map item.
     */
    post: operations["createItemsDirectusSyncIDMap"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing directus_sync_id_map items.
     */
    delete: operations["deleteItemsDirectusSyncIDMap"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple directus_sync_id_map items at the same time.
     */
    patch: operations["updateItemsDirectusSyncIDMap"];
    trace?: never;
  };
  "/items/directus_sync_id_map/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single directus_sync_id_map item by unique identifier.
     */
    get: operations["readSingleItemsDirectusSyncIDMap"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing directus_sync_id_map item.
     */
    delete: operations["deleteSingleItemsDirectusSyncIDMap"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing directus_sync_id_map item.
     */
    patch: operations["updateSingleItemsDirectusSyncIDMap"];
    trace?: never;
  };
  "/items/game_star_social_links": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_social_links items.
     */
    get: operations["readItemsGameStarSocialLinks"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_social_links item.
     */
    post: operations["createItemsGameStarSocialLinks"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_social_links items.
     */
    delete: operations["deleteItemsGameStarSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_social_links items at the same time.
     */
    patch: operations["updateItemsGameStarSocialLinks"];
    trace?: never;
  };
  "/items/game_star_social_links/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_social_links item by unique identifier.
     */
    get: operations["readSingleItemsGameStarSocialLinks"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_social_links item.
     */
    delete: operations["deleteSingleItemsGameStarSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_social_links item.
     */
    patch: operations["updateSingleItemsGameStarSocialLinks"];
    trace?: never;
  };
  "/items/events": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the events items.
     */
    get: operations["readItemsEvents"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new events item.
     */
    post: operations["createItemsEvents"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing events items.
     */
    delete: operations["deleteItemsEvents"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple events items at the same time.
     */
    patch: operations["updateItemsEvents"];
    trace?: never;
  };
  "/items/events/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single events item by unique identifier.
     */
    get: operations["readSingleItemsEvents"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing events item.
     */
    delete: operations["deleteSingleItemsEvents"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing events item.
     */
    patch: operations["updateSingleItemsEvents"];
    trace?: never;
  };
  "/items/members": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the members items.
     */
    get: operations["readItemsMembers"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new members item.
     */
    post: operations["createItemsMembers"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing members items.
     */
    delete: operations["deleteItemsMembers"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple members items at the same time.
     */
    patch: operations["updateItemsMembers"];
    trace?: never;
  };
  "/items/members/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single members item by unique identifier.
     */
    get: operations["readSingleItemsMembers"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing members item.
     */
    delete: operations["deleteSingleItemsMembers"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing members item.
     */
    patch: operations["updateSingleItemsMembers"];
    trace?: never;
  };
  "/items/commission_memberships": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the commission_memberships items.
     */
    get: operations["readItemsCommissionMemberships"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new commission_memberships item.
     */
    post: operations["createItemsCommissionMemberships"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing commission_memberships items.
     */
    delete: operations["deleteItemsCommissionMemberships"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple commission_memberships items at the same time.
     */
    patch: operations["updateItemsCommissionMemberships"];
    trace?: never;
  };
  "/items/commission_memberships/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single commission_memberships item by unique identifier.
     */
    get: operations["readSingleItemsCommissionMemberships"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing commission_memberships item.
     */
    delete: operations["deleteSingleItemsCommissionMemberships"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing commission_memberships item.
     */
    patch: operations["updateSingleItemsCommissionMemberships"];
    trace?: never;
  };
  "/items/commissions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the commissions items.
     */
    get: operations["readItemsCommissions"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new commissions item.
     */
    post: operations["createItemsCommissions"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing commissions items.
     */
    delete: operations["deleteItemsCommissions"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple commissions items at the same time.
     */
    patch: operations["updateItemsCommissions"];
    trace?: never;
  };
  "/items/commissions/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single commissions item by unique identifier.
     */
    get: operations["readSingleItemsCommissions"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing commissions item.
     */
    delete: operations["deleteSingleItemsCommissions"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing commissions item.
     */
    patch: operations["updateSingleItemsCommissions"];
    trace?: never;
  };
  "/items/languages": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the languages items.
     */
    get: operations["readItemsLanguages"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new languages item.
     */
    post: operations["createItemsLanguages"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing languages items.
     */
    delete: operations["deleteItemsLanguages"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple languages items at the same time.
     */
    patch: operations["updateItemsLanguages"];
    trace?: never;
  };
  "/items/languages/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single languages item by unique identifier.
     */
    get: operations["readSingleItemsLanguages"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing languages item.
     */
    delete: operations["deleteSingleItemsLanguages"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing languages item.
     */
    patch: operations["updateSingleItemsLanguages"];
    trace?: never;
  };
  "/items/game_star_articles_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_articles_translations items.
     */
    get: operations["readItemsGameStarArticlesTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_articles_translations item.
     */
    post: operations["createItemsGameStarArticlesTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_articles_translations items.
     */
    delete: operations["deleteItemsGameStarArticlesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_articles_translations items at the same time.
     */
    patch: operations["updateItemsGameStarArticlesTranslations"];
    trace?: never;
  };
  "/items/game_star_articles_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_articles_translations item by unique identifier.
     */
    get: operations["readSingleItemsGameStarArticlesTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_articles_translations item.
     */
    delete: operations["deleteSingleItemsGameStarArticlesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_articles_translations item.
     */
    patch: operations["updateSingleItemsGameStarArticlesTranslations"];
    trace?: never;
  };
  "/items/game_star_articles": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_articles items.
     */
    get: operations["readItemsGameStarArticles"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_articles item.
     */
    post: operations["createItemsGameStarArticles"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_articles items.
     */
    delete: operations["deleteItemsGameStarArticles"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_articles items at the same time.
     */
    patch: operations["updateItemsGameStarArticles"];
    trace?: never;
  };
  "/items/game_star_articles/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_articles item by unique identifier.
     */
    get: operations["readSingleItemsGameStarArticles"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_articles item.
     */
    delete: operations["deleteSingleItemsGameStarArticles"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_articles item.
     */
    patch: operations["updateSingleItemsGameStarArticles"];
    trace?: never;
  };
  "/items/news_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the news_translations items.
     */
    get: operations["readItemsNewsTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new news_translations item.
     */
    post: operations["createItemsNewsTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing news_translations items.
     */
    delete: operations["deleteItemsNewsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple news_translations items at the same time.
     */
    patch: operations["updateItemsNewsTranslations"];
    trace?: never;
  };
  "/items/news_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single news_translations item by unique identifier.
     */
    get: operations["readSingleItemsNewsTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing news_translations item.
     */
    delete: operations["deleteSingleItemsNewsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing news_translations item.
     */
    patch: operations["updateSingleItemsNewsTranslations"];
    trace?: never;
  };
  "/items/news": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the news items.
     */
    get: operations["readItemsNews"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new news item.
     */
    post: operations["createItemsNews"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing news items.
     */
    delete: operations["deleteItemsNews"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple news items at the same time.
     */
    patch: operations["updateItemsNews"];
    trace?: never;
  };
  "/items/news/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single news item by unique identifier.
     */
    get: operations["readSingleItemsNews"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing news item.
     */
    delete: operations["deleteSingleItemsNews"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing news item.
     */
    patch: operations["updateSingleItemsNews"];
    trace?: never;
  };
  "/items/game_star_projects_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_projects_translations items.
     */
    get: operations["readItemsGameStarProjectsTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_projects_translations item.
     */
    post: operations["createItemsGameStarProjectsTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_projects_translations items.
     */
    delete: operations["deleteItemsGameStarProjectsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_projects_translations items at the same time.
     */
    patch: operations["updateItemsGameStarProjectsTranslations"];
    trace?: never;
  };
  "/items/game_star_projects_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_projects_translations item by unique identifier.
     */
    get: operations["readSingleItemsGameStarProjectsTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_projects_translations item.
     */
    delete: operations["deleteSingleItemsGameStarProjectsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_projects_translations item.
     */
    patch: operations["updateSingleItemsGameStarProjectsTranslations"];
    trace?: never;
  };
  "/items/game_star_projects": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_projects items.
     */
    get: operations["readItemsGameStarProjects"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_projects item.
     */
    post: operations["createItemsGameStarProjects"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_projects items.
     */
    delete: operations["deleteItemsGameStarProjects"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_projects items at the same time.
     */
    patch: operations["updateItemsGameStarProjects"];
    trace?: never;
  };
  "/items/game_star_projects/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_projects item by unique identifier.
     */
    get: operations["readSingleItemsGameStarProjects"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_projects item.
     */
    delete: operations["deleteSingleItemsGameStarProjects"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_projects item.
     */
    patch: operations["updateSingleItemsGameStarProjects"];
    trace?: never;
  };
  "/items/std_cell_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the std_cell_translations items.
     */
    get: operations["readItemsStdCellTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new std_cell_translations item.
     */
    post: operations["createItemsStdCellTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing std_cell_translations items.
     */
    delete: operations["deleteItemsStdCellTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple std_cell_translations items at the same time.
     */
    patch: operations["updateItemsStdCellTranslations"];
    trace?: never;
  };
  "/items/std_cell_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single std_cell_translations item by unique identifier.
     */
    get: operations["readSingleItemsStdCellTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing std_cell_translations item.
     */
    delete: operations["deleteSingleItemsStdCellTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing std_cell_translations item.
     */
    patch: operations["updateSingleItemsStdCellTranslations"];
    trace?: never;
  };
  "/items/std_cell": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the std_cell items.
     */
    get: operations["readItemsStdCell"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new std_cell item.
     */
    post: operations["createItemsStdCell"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing std_cell items.
     */
    delete: operations["deleteItemsStdCell"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple std_cell items at the same time.
     */
    patch: operations["updateItemsStdCell"];
    trace?: never;
  };
  "/items/std_cell/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single std_cell item by unique identifier.
     */
    get: operations["readSingleItemsStdCell"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing std_cell item.
     */
    delete: operations["deleteSingleItemsStdCell"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing std_cell item.
     */
    patch: operations["updateSingleItemsStdCell"];
    trace?: never;
  };
  "/items/partners": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the partners items.
     */
    get: operations["readItemsPartners"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new partners item.
     */
    post: operations["createItemsPartners"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing partners items.
     */
    delete: operations["deleteItemsPartners"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple partners items at the same time.
     */
    patch: operations["updateItemsPartners"];
    trace?: never;
  };
  "/items/partners/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single partners item by unique identifier.
     */
    get: operations["readSingleItemsPartners"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing partners item.
     */
    delete: operations["deleteSingleItemsPartners"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing partners item.
     */
    patch: operations["updateSingleItemsPartners"];
    trace?: never;
  };
  "/items/association_partners": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_partners items.
     */
    get: operations["readItemsAssociationPartners"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_partners item.
     */
    post: operations["createItemsAssociationPartners"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_partners items.
     */
    delete: operations["deleteItemsAssociationPartners"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_partners items at the same time.
     */
    patch: operations["updateItemsAssociationPartners"];
    trace?: never;
  };
  "/items/association_partners/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_partners item by unique identifier.
     */
    get: operations["readSingleItemsAssociationPartners"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_partners item.
     */
    delete: operations["deleteSingleItemsAssociationPartners"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_partners item.
     */
    patch: operations["updateSingleItemsAssociationPartners"];
    trace?: never;
  };
  "/items/association": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association items.
     */
    get: operations["readItemsAssociation"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association item.
     */
    post: operations["createItemsAssociation"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association items.
     */
    delete: operations["deleteItemsAssociation"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association items at the same time.
     */
    patch: operations["updateItemsAssociation"];
    trace?: never;
  };
  "/items/association/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association item by unique identifier.
     */
    get: operations["readSingleItemsAssociation"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association item.
     */
    delete: operations["deleteSingleItemsAssociation"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association item.
     */
    patch: operations["updateSingleItemsAssociation"];
    trace?: never;
  };
  "/items/galleries": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the galleries items.
     */
    get: operations["readItemsGalleries"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new galleries item.
     */
    post: operations["createItemsGalleries"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing galleries items.
     */
    delete: operations["deleteItemsGalleries"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple galleries items at the same time.
     */
    patch: operations["updateItemsGalleries"];
    trace?: never;
  };
  "/items/galleries/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single galleries item by unique identifier.
     */
    get: operations["readSingleItemsGalleries"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing galleries item.
     */
    delete: operations["deleteSingleItemsGalleries"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing galleries item.
     */
    patch: operations["updateSingleItemsGalleries"];
    trace?: never;
  };
  "/items/game_star_events_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_events_translations items.
     */
    get: operations["readItemsGameStarEventsTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_events_translations item.
     */
    post: operations["createItemsGameStarEventsTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_events_translations items.
     */
    delete: operations["deleteItemsGameStarEventsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_events_translations items at the same time.
     */
    patch: operations["updateItemsGameStarEventsTranslations"];
    trace?: never;
  };
  "/items/game_star_events_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_events_translations item by unique identifier.
     */
    get: operations["readSingleItemsGameStarEventsTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_events_translations item.
     */
    delete: operations["deleteSingleItemsGameStarEventsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_events_translations item.
     */
    patch: operations["updateSingleItemsGameStarEventsTranslations"];
    trace?: never;
  };
  "/items/game_star_events": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_events items.
     */
    get: operations["readItemsGameStarEvents"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_events item.
     */
    post: operations["createItemsGameStarEvents"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_events items.
     */
    delete: operations["deleteItemsGameStarEvents"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_events items at the same time.
     */
    patch: operations["updateItemsGameStarEvents"];
    trace?: never;
  };
  "/items/game_star_events/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_events item by unique identifier.
     */
    get: operations["readSingleItemsGameStarEvents"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_events item.
     */
    delete: operations["deleteSingleItemsGameStarEvents"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_events item.
     */
    patch: operations["updateSingleItemsGameStarEvents"];
    trace?: never;
  };
  "/items/commissions_social_links": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the commissions_social_links items.
     */
    get: operations["readItemsCommissionsSocialLinks"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new commissions_social_links item.
     */
    post: operations["createItemsCommissionsSocialLinks"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing commissions_social_links items.
     */
    delete: operations["deleteItemsCommissionsSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple commissions_social_links items at the same time.
     */
    patch: operations["updateItemsCommissionsSocialLinks"];
    trace?: never;
  };
  "/items/commissions_social_links/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single commissions_social_links item by unique identifier.
     */
    get: operations["readSingleItemsCommissionsSocialLinks"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing commissions_social_links item.
     */
    delete: operations["deleteSingleItemsCommissionsSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing commissions_social_links item.
     */
    patch: operations["updateSingleItemsCommissionsSocialLinks"];
    trace?: never;
  };
  "/items/social_links": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the social_links items.
     */
    get: operations["readItemsSocialLinks"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new social_links item.
     */
    post: operations["createItemsSocialLinks"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing social_links items.
     */
    delete: operations["deleteItemsSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple social_links items at the same time.
     */
    patch: operations["updateItemsSocialLinks"];
    trace?: never;
  };
  "/items/social_links/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single social_links item by unique identifier.
     */
    get: operations["readSingleItemsSocialLinks"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing social_links item.
     */
    delete: operations["deleteSingleItemsSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing social_links item.
     */
    patch: operations["updateSingleItemsSocialLinks"];
    trace?: never;
  };
  "/items/subsonic": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the subsonic items.
     */
    get: operations["readItemsSubsonic"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new subsonic item.
     */
    post: operations["createItemsSubsonic"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing subsonic items.
     */
    delete: operations["deleteItemsSubsonic"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple subsonic items at the same time.
     */
    patch: operations["updateItemsSubsonic"];
    trace?: never;
  };
  "/items/subsonic/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single subsonic item by unique identifier.
     */
    get: operations["readSingleItemsSubsonic"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing subsonic item.
     */
    delete: operations["deleteSingleItemsSubsonic"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing subsonic item.
     */
    patch: operations["updateSingleItemsSubsonic"];
    trace?: never;
  };
  "/items/icbd_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_translations items.
     */
    get: operations["readItemsIcbdTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_translations item.
     */
    post: operations["createItemsIcbdTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_translations items.
     */
    delete: operations["deleteItemsIcbdTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_translations items at the same time.
     */
    patch: operations["updateItemsIcbdTranslations"];
    trace?: never;
  };
  "/items/icbd_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_translations item by unique identifier.
     */
    get: operations["readSingleItemsIcbdTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_translations item.
     */
    delete: operations["deleteSingleItemsIcbdTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_translations item.
     */
    patch: operations["updateSingleItemsIcbdTranslations"];
    trace?: never;
  };
  "/items/icbd": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd items.
     */
    get: operations["readItemsIcbd"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd item.
     */
    post: operations["createItemsIcbd"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd items.
     */
    delete: operations["deleteItemsIcbd"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd items at the same time.
     */
    patch: operations["updateItemsIcbd"];
    trace?: never;
  };
  "/items/icbd/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd item by unique identifier.
     */
    get: operations["readSingleItemsIcbd"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd item.
     */
    delete: operations["deleteSingleItemsIcbd"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd item.
     */
    patch: operations["updateSingleItemsIcbd"];
    trace?: never;
  };
  "/items/save_the_date_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the save_the_date_translations items.
     */
    get: operations["readItemsSavetheDateTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new save_the_date_translations item.
     */
    post: operations["createItemsSavetheDateTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing save_the_date_translations items.
     */
    delete: operations["deleteItemsSavetheDateTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple save_the_date_translations items at the same time.
     */
    patch: operations["updateItemsSavetheDateTranslations"];
    trace?: never;
  };
  "/items/save_the_date_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single save_the_date_translations item by unique identifier.
     */
    get: operations["readSingleItemsSavetheDateTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing save_the_date_translations item.
     */
    delete: operations["deleteSingleItemsSavetheDateTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing save_the_date_translations item.
     */
    patch: operations["updateSingleItemsSavetheDateTranslations"];
    trace?: never;
  };
  "/items/save_the_date": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the save_the_date items.
     */
    get: operations["readItemsSavetheDate"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new save_the_date item.
     */
    post: operations["createItemsSavetheDate"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing save_the_date items.
     */
    delete: operations["deleteItemsSavetheDate"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple save_the_date items at the same time.
     */
    patch: operations["updateItemsSavetheDate"];
    trace?: never;
  };
  "/items/save_the_date/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single save_the_date item by unique identifier.
     */
    get: operations["readSingleItemsSavetheDate"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing save_the_date item.
     */
    delete: operations["deleteSingleItemsSavetheDate"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing save_the_date item.
     */
    patch: operations["updateSingleItemsSavetheDate"];
    trace?: never;
  };
  "/items/association_public_files": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_public_files items.
     */
    get: operations["readItemsAssociationPublicFiles"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_public_files item.
     */
    post: operations["createItemsAssociationPublicFiles"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_public_files items.
     */
    delete: operations["deleteItemsAssociationPublicFiles"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_public_files items at the same time.
     */
    patch: operations["updateItemsAssociationPublicFiles"];
    trace?: never;
  };
  "/items/association_public_files/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_public_files item by unique identifier.
     */
    get: operations["readSingleItemsAssociationPublicFiles"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_public_files item.
     */
    delete: operations["deleteSingleItemsAssociationPublicFiles"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_public_files item.
     */
    patch: operations["updateSingleItemsAssociationPublicFiles"];
    trace?: never;
  };
  "/items/icbd_files": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_files items.
     */
    get: operations["readItemsIcbdFiles"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_files item.
     */
    post: operations["createItemsIcbdFiles"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_files items.
     */
    delete: operations["deleteItemsIcbdFiles"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_files items at the same time.
     */
    patch: operations["updateItemsIcbdFiles"];
    trace?: never;
  };
  "/items/icbd_files/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_files item by unique identifier.
     */
    get: operations["readSingleItemsIcbdFiles"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_files item.
     */
    delete: operations["deleteSingleItemsIcbdFiles"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_files item.
     */
    patch: operations["updateSingleItemsIcbdFiles"];
    trace?: never;
  };
  "/items/icbd_activities": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_activities items.
     */
    get: operations["readItemsIcbdActivities"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_activities item.
     */
    post: operations["createItemsIcbdActivities"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_activities items.
     */
    delete: operations["deleteItemsIcbdActivities"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_activities items at the same time.
     */
    patch: operations["updateItemsIcbdActivities"];
    trace?: never;
  };
  "/items/icbd_activities/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_activities item by unique identifier.
     */
    get: operations["readSingleItemsIcbdActivities"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_activities item.
     */
    delete: operations["deleteSingleItemsIcbdActivities"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_activities item.
     */
    patch: operations["updateSingleItemsIcbdActivities"];
    trace?: never;
  };
  "/items/association_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_translations items.
     */
    get: operations["readItemsAssociationTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_translations item.
     */
    post: operations["createItemsAssociationTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_translations items.
     */
    delete: operations["deleteItemsAssociationTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_translations items at the same time.
     */
    patch: operations["updateItemsAssociationTranslations"];
    trace?: never;
  };
  "/items/association_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_translations item by unique identifier.
     */
    get: operations["readSingleItemsAssociationTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_translations item.
     */
    delete: operations["deleteSingleItemsAssociationTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_translations item.
     */
    patch: operations["updateSingleItemsAssociationTranslations"];
    trace?: never;
  };
  "/items/icbd_speakers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_speakers items.
     */
    get: operations["readItemsIcbdSpeakers"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_speakers item.
     */
    post: operations["createItemsIcbdSpeakers"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_speakers items.
     */
    delete: operations["deleteItemsIcbdSpeakers"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_speakers items at the same time.
     */
    patch: operations["updateItemsIcbdSpeakers"];
    trace?: never;
  };
  "/items/icbd_speakers/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_speakers item by unique identifier.
     */
    get: operations["readSingleItemsIcbdSpeakers"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_speakers item.
     */
    delete: operations["deleteSingleItemsIcbdSpeakers"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_speakers item.
     */
    patch: operations["updateSingleItemsIcbdSpeakers"];
    trace?: never;
  };
  "/items/registrations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the registrations items.
     */
    get: operations["readItemsRegistrations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new registrations item.
     */
    post: operations["createItemsRegistrations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing registrations items.
     */
    delete: operations["deleteItemsRegistrations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple registrations items at the same time.
     */
    patch: operations["updateItemsRegistrations"];
    trace?: never;
  };
  "/items/registrations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single registrations item by unique identifier.
     */
    get: operations["readSingleItemsRegistrations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing registrations item.
     */
    delete: operations["deleteSingleItemsRegistrations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing registrations item.
     */
    patch: operations["updateSingleItemsRegistrations"];
    trace?: never;
  };
  "/items/artists": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the artists items.
     */
    get: operations["readItemsArtists"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new artists item.
     */
    post: operations["createItemsArtists"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing artists items.
     */
    delete: operations["deleteItemsArtists"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple artists items at the same time.
     */
    patch: operations["updateItemsArtists"];
    trace?: never;
  };
  "/items/artists/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single artists item by unique identifier.
     */
    get: operations["readSingleItemsArtists"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing artists item.
     */
    delete: operations["deleteSingleItemsArtists"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing artists item.
     */
    patch: operations["updateSingleItemsArtists"];
    trace?: never;
  };
  "/items/subsonic_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the subsonic_translations items.
     */
    get: operations["readItemsSubsonicTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new subsonic_translations item.
     */
    post: operations["createItemsSubsonicTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing subsonic_translations items.
     */
    delete: operations["deleteItemsSubsonicTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple subsonic_translations items at the same time.
     */
    patch: operations["updateItemsSubsonicTranslations"];
    trace?: never;
  };
  "/items/subsonic_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single subsonic_translations item by unique identifier.
     */
    get: operations["readSingleItemsSubsonicTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing subsonic_translations item.
     */
    delete: operations["deleteSingleItemsSubsonicTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing subsonic_translations item.
     */
    patch: operations["updateSingleItemsSubsonicTranslations"];
    trace?: never;
  };
  "/items/icbd_activities_registrations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_activities_registrations items.
     */
    get: operations["readItemsIcbdActivitiesRegistrations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_activities_registrations item.
     */
    post: operations["createItemsIcbdActivitiesRegistrations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_activities_registrations items.
     */
    delete: operations["deleteItemsIcbdActivitiesRegistrations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_activities_registrations items at the same time.
     */
    patch: operations["updateItemsIcbdActivitiesRegistrations"];
    trace?: never;
  };
  "/items/icbd_activities_registrations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_activities_registrations item by unique identifier.
     */
    get: operations["readSingleItemsIcbdActivitiesRegistrations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_activities_registrations item.
     */
    delete: operations["deleteSingleItemsIcbdActivitiesRegistrations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_activities_registrations item.
     */
    patch: operations["updateSingleItemsIcbdActivitiesRegistrations"];
    trace?: never;
  };
  "/items/association_social_links": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_social_links items.
     */
    get: operations["readItemsAssociationSocialLinks"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_social_links item.
     */
    post: operations["createItemsAssociationSocialLinks"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_social_links items.
     */
    delete: operations["deleteItemsAssociationSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_social_links items at the same time.
     */
    patch: operations["updateItemsAssociationSocialLinks"];
    trace?: never;
  };
  "/items/association_social_links/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_social_links item by unique identifier.
     */
    get: operations["readSingleItemsAssociationSocialLinks"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_social_links item.
     */
    delete: operations["deleteSingleItemsAssociationSocialLinks"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_social_links item.
     */
    patch: operations["updateSingleItemsAssociationSocialLinks"];
    trace?: never;
  };
  "/items/association_poles_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_poles_translations items.
     */
    get: operations["readItemsAssociationPolesTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_poles_translations item.
     */
    post: operations["createItemsAssociationPolesTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_poles_translations items.
     */
    delete: operations["deleteItemsAssociationPolesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_poles_translations items at the same time.
     */
    patch: operations["updateItemsAssociationPolesTranslations"];
    trace?: never;
  };
  "/items/association_poles_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_poles_translations item by unique identifier.
     */
    get: operations["readSingleItemsAssociationPolesTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_poles_translations item.
     */
    delete: operations["deleteSingleItemsAssociationPolesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_poles_translations item.
     */
    patch: operations["updateSingleItemsAssociationPolesTranslations"];
    trace?: never;
  };
  "/items/association_poles": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_poles items.
     */
    get: operations["readItemsAssociationPoles"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_poles item.
     */
    post: operations["createItemsAssociationPoles"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_poles items.
     */
    delete: operations["deleteItemsAssociationPoles"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_poles items at the same time.
     */
    patch: operations["updateItemsAssociationPoles"];
    trace?: never;
  };
  "/items/association_poles/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_poles item by unique identifier.
     */
    get: operations["readSingleItemsAssociationPoles"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_poles item.
     */
    delete: operations["deleteSingleItemsAssociationPoles"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_poles item.
     */
    patch: operations["updateSingleItemsAssociationPoles"];
    trace?: never;
  };
  "/items/news_partners": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the news_partners items.
     */
    get: operations["readItemsNewsPartners"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new news_partners item.
     */
    post: operations["createItemsNewsPartners"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing news_partners items.
     */
    delete: operations["deleteItemsNewsPartners"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple news_partners items at the same time.
     */
    patch: operations["updateItemsNewsPartners"];
    trace?: never;
  };
  "/items/news_partners/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single news_partners item by unique identifier.
     */
    get: operations["readSingleItemsNewsPartners"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing news_partners item.
     */
    delete: operations["deleteSingleItemsNewsPartners"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing news_partners item.
     */
    patch: operations["updateSingleItemsNewsPartners"];
    trace?: never;
  };
  "/items/game_star_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star_translations items.
     */
    get: operations["readItemsGameStarTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star_translations item.
     */
    post: operations["createItemsGameStarTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star_translations items.
     */
    delete: operations["deleteItemsGameStarTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star_translations items at the same time.
     */
    patch: operations["updateItemsGameStarTranslations"];
    trace?: never;
  };
  "/items/game_star_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star_translations item by unique identifier.
     */
    get: operations["readSingleItemsGameStarTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star_translations item.
     */
    delete: operations["deleteSingleItemsGameStarTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star_translations item.
     */
    patch: operations["updateSingleItemsGameStarTranslations"];
    trace?: never;
  };
  "/items/game_star": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the game_star items.
     */
    get: operations["readItemsGameStar"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new game_star item.
     */
    post: operations["createItemsGameStar"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing game_star items.
     */
    delete: operations["deleteItemsGameStar"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple game_star items at the same time.
     */
    patch: operations["updateItemsGameStar"];
    trace?: never;
  };
  "/items/game_star/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single game_star item by unique identifier.
     */
    get: operations["readSingleItemsGameStar"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing game_star item.
     */
    delete: operations["deleteSingleItemsGameStar"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing game_star item.
     */
    patch: operations["updateSingleItemsGameStar"];
    trace?: never;
  };
  "/items/association_memberships_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_memberships_translations items.
     */
    get: operations["readItemsAssociationMembershipsTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_memberships_translations item.
     */
    post: operations["createItemsAssociationMembershipsTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_memberships_translations items.
     */
    delete: operations["deleteItemsAssociationMembershipsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_memberships_translations items at the same time.
     */
    patch: operations["updateItemsAssociationMembershipsTranslations"];
    trace?: never;
  };
  "/items/association_memberships_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_memberships_translations item by unique identifier.
     */
    get: operations["readSingleItemsAssociationMembershipsTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_memberships_translations item.
     */
    delete: operations["deleteSingleItemsAssociationMembershipsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_memberships_translations item.
     */
    patch: operations["updateSingleItemsAssociationMembershipsTranslations"];
    trace?: never;
  };
  "/items/association_memberships": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_memberships items.
     */
    get: operations["readItemsAssociationMemberships"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_memberships item.
     */
    post: operations["createItemsAssociationMemberships"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_memberships items.
     */
    delete: operations["deleteItemsAssociationMemberships"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_memberships items at the same time.
     */
    patch: operations["updateItemsAssociationMemberships"];
    trace?: never;
  };
  "/items/association_memberships/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_memberships item by unique identifier.
     */
    get: operations["readSingleItemsAssociationMemberships"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_memberships item.
     */
    delete: operations["deleteSingleItemsAssociationMemberships"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_memberships item.
     */
    patch: operations["updateSingleItemsAssociationMemberships"];
    trace?: never;
  };
  "/items/icbd_phds": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_phds items.
     */
    get: operations["readItemsIcbdPhds"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_phds item.
     */
    post: operations["createItemsIcbdPhds"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_phds items.
     */
    delete: operations["deleteItemsIcbdPhds"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_phds items at the same time.
     */
    patch: operations["updateItemsIcbdPhds"];
    trace?: never;
  };
  "/items/icbd_phds/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_phds item by unique identifier.
     */
    get: operations["readSingleItemsIcbdPhds"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_phds item.
     */
    delete: operations["deleteSingleItemsIcbdPhds"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_phds item.
     */
    patch: operations["updateSingleItemsIcbdPhds"];
    trace?: never;
  };
  "/items/partner_category_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the partner_category_translations items.
     */
    get: operations["readItemsPartnerCategoryTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new partner_category_translations item.
     */
    post: operations["createItemsPartnerCategoryTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing partner_category_translations items.
     */
    delete: operations["deleteItemsPartnerCategoryTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple partner_category_translations items at the same time.
     */
    patch: operations["updateItemsPartnerCategoryTranslations"];
    trace?: never;
  };
  "/items/partner_category_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single partner_category_translations item by unique identifier.
     */
    get: operations["readSingleItemsPartnerCategoryTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing partner_category_translations item.
     */
    delete: operations["deleteSingleItemsPartnerCategoryTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing partner_category_translations item.
     */
    patch: operations["updateSingleItemsPartnerCategoryTranslations"];
    trace?: never;
  };
  "/items/partner_category": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the partner_category items.
     */
    get: operations["readItemsPartnerCategory"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new partner_category item.
     */
    post: operations["createItemsPartnerCategory"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing partner_category items.
     */
    delete: operations["deleteItemsPartnerCategory"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple partner_category items at the same time.
     */
    patch: operations["updateItemsPartnerCategory"];
    trace?: never;
  };
  "/items/partner_category/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single partner_category item by unique identifier.
     */
    get: operations["readSingleItemsPartnerCategory"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing partner_category item.
     */
    delete: operations["deleteSingleItemsPartnerCategory"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing partner_category item.
     */
    patch: operations["updateSingleItemsPartnerCategory"];
    trace?: never;
  };
  "/items/inventory": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the inventory items.
     */
    get: operations["readItemsInventory"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new inventory item.
     */
    post: operations["createItemsInventory"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing inventory items.
     */
    delete: operations["deleteItemsInventory"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple inventory items at the same time.
     */
    patch: operations["updateItemsInventory"];
    trace?: never;
  };
  "/items/inventory/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single inventory item by unique identifier.
     */
    get: operations["readSingleItemsInventory"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing inventory item.
     */
    delete: operations["deleteSingleItemsInventory"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing inventory item.
     */
    patch: operations["updateSingleItemsInventory"];
    trace?: never;
  };
  "/items/commissions_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the commissions_translations items.
     */
    get: operations["readItemsCommissionsTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new commissions_translations item.
     */
    post: operations["createItemsCommissionsTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing commissions_translations items.
     */
    delete: operations["deleteItemsCommissionsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple commissions_translations items at the same time.
     */
    patch: operations["updateItemsCommissionsTranslations"];
    trace?: never;
  };
  "/items/commissions_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single commissions_translations item by unique identifier.
     */
    get: operations["readSingleItemsCommissionsTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing commissions_translations item.
     */
    delete: operations["deleteSingleItemsCommissionsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing commissions_translations item.
     */
    patch: operations["updateSingleItemsCommissionsTranslations"];
    trace?: never;
  };
  "/items/icbd_activities_icbd_speakers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_activities_icbd_speakers items.
     */
    get: operations["readItemsIcbdActivitiesIcbdSpeakers"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_activities_icbd_speakers item.
     */
    post: operations["createItemsIcbdActivitiesIcbdSpeakers"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_activities_icbd_speakers items.
     */
    delete: operations["deleteItemsIcbdActivitiesIcbdSpeakers"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_activities_icbd_speakers items at the same time.
     */
    patch: operations["updateItemsIcbdActivitiesIcbdSpeakers"];
    trace?: never;
  };
  "/items/icbd_activities_icbd_speakers/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_activities_icbd_speakers item by unique identifier.
     */
    get: operations["readSingleItemsIcbdActivitiesIcbdSpeakers"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_activities_icbd_speakers item.
     */
    delete: operations["deleteSingleItemsIcbdActivitiesIcbdSpeakers"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_activities_icbd_speakers item.
     */
    patch: operations["updateSingleItemsIcbdActivitiesIcbdSpeakers"];
    trace?: never;
  };
  "/items/association_public_files_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the association_public_files_translations items.
     */
    get: operations["readItemsAssociationPublicFilesTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new association_public_files_translations item.
     */
    post: operations["createItemsAssociationPublicFilesTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing association_public_files_translations items.
     */
    delete: operations["deleteItemsAssociationPublicFilesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple association_public_files_translations items at the same time.
     */
    patch: operations["updateItemsAssociationPublicFilesTranslations"];
    trace?: never;
  };
  "/items/association_public_files_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single association_public_files_translations item by unique identifier.
     */
    get: operations["readSingleItemsAssociationPublicFilesTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing association_public_files_translations item.
     */
    delete: operations["deleteSingleItemsAssociationPublicFilesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing association_public_files_translations item.
     */
    patch: operations["updateSingleItemsAssociationPublicFilesTranslations"];
    trace?: never;
  };
  "/items/commission_memberships_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the commission_memberships_translations items.
     */
    get: operations["readItemsCommissionMembershipsTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new commission_memberships_translations item.
     */
    post: operations["createItemsCommissionMembershipsTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing commission_memberships_translations items.
     */
    delete: operations["deleteItemsCommissionMembershipsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple commission_memberships_translations items at the same time.
     */
    patch: operations["updateItemsCommissionMembershipsTranslations"];
    trace?: never;
  };
  "/items/commission_memberships_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single commission_memberships_translations item by unique identifier.
     */
    get: operations["readSingleItemsCommissionMembershipsTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing commission_memberships_translations item.
     */
    delete: operations["deleteSingleItemsCommissionMembershipsTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing commission_memberships_translations item.
     */
    patch: operations["updateSingleItemsCommissionMembershipsTranslations"];
    trace?: never;
  };
  "/items/news_commissions": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the news_commissions items.
     */
    get: operations["readItemsNewsCommissions"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new news_commissions item.
     */
    post: operations["createItemsNewsCommissions"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing news_commissions items.
     */
    delete: operations["deleteItemsNewsCommissions"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple news_commissions items at the same time.
     */
    patch: operations["updateItemsNewsCommissions"];
    trace?: never;
  };
  "/items/news_commissions/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single news_commissions item by unique identifier.
     */
    get: operations["readSingleItemsNewsCommissions"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing news_commissions item.
     */
    delete: operations["deleteSingleItemsNewsCommissions"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing news_commissions item.
     */
    patch: operations["updateSingleItemsNewsCommissions"];
    trace?: never;
  };
  "/items/icbd_activities_translations": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * List Items
     * @description List the icbd_activities_translations items.
     */
    get: operations["readItemsIcbdActivitiesTranslations"];
    put?: never;
    /**
     * Create an Item
     * @description Create a new icbd_activities_translations item.
     */
    post: operations["createItemsIcbdActivitiesTranslations"];
    /**
     * Delete Multiple Items
     * @description Delete multiple existing icbd_activities_translations items.
     */
    delete: operations["deleteItemsIcbdActivitiesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update Multiple Items
     * @description Update multiple icbd_activities_translations items at the same time.
     */
    patch: operations["updateItemsIcbdActivitiesTranslations"];
    trace?: never;
  };
  "/items/icbd_activities_translations/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retrieve an Item
     * @description Retrieve a single icbd_activities_translations item by unique identifier.
     */
    get: operations["readSingleItemsIcbdActivitiesTranslations"];
    put?: never;
    post?: never;
    /**
     * Delete an Item
     * @description Delete an existing icbd_activities_translations item.
     */
    delete: operations["deleteSingleItemsIcbdActivitiesTranslations"];
    options?: never;
    head?: never;
    /**
     * Update an Item
     * @description Update an existing icbd_activities_translations item.
     */
    patch: operations["updateSingleItemsIcbdActivitiesTranslations"];
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    Diff: {
      hash?: string;
      diff?: {
        collections?: {
          collection?: string;
          diff?: Record<string, never>[];
        }[];
        fields?: {
          collection?: string;
          field?: string;
          diff?: Record<string, never>[];
        }[];
        relations?: {
          collection?: string;
          field?: string;
          related_collection?: string;
          diff?: Record<string, never>[];
        }[];
      };
    };
    Files: {
      /**
       * @description Unique identifier for the file.
       * @example 8cbb43fe-4cdf-4991-8352-c461779cec02
       */
      id?: string;
      /**
       * @description Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).
       * @example local
       */
      storage?: string;
      /**
       * @description Name of the file on disk. By default, Directus uses a random hash for the filename.
       * @example a88c3b72-ac58-5436-a4ec-b2858531333a.jpg
       */
      filename_disk?: string;
      /**
       * @description How you want to the file to be named when it's being downloaded.
       * @example avatar.jpg
       */
      filename_download?: string;
      /**
       * @description Title for the file. Is extracted from the filename on upload, but can be edited by the user.
       * @example User Avatar
       */
      title?: string;
      /**
       * @description MIME type of the file.
       * @example image/jpeg
       */
      type?: string;
      /**
       * @description Virtual folder where this file resides in.
       * @example null
       */
      folder?: (string | components["schemas"]["Folders"]) | null;
      /**
       * @description Who uploaded the file.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      uploaded_by?: string | components["schemas"]["Users"];
      /**
       * Format: date-time
       * @description When the file was created.
       * @example 2019-12-03T00:10:15+00:00
       */
      created_on?: string;
      modified_by?: (string | components["schemas"]["Users"]) | null;
      /** Format: timestamp */
      modified_on?: string;
      /**
       * @description Character set of the file.
       * @example binary
       */
      charset?: string | null;
      /**
       * @description Size of the file in bytes.
       * @example 137862
       */
      filesize?: number;
      /**
       * @description Width of the file in pixels. Only applies to images.
       * @example 800
       */
      width?: number | null;
      /**
       * @description Height of the file in pixels. Only applies to images.
       * @example 838
       */
      height?: number | null;
      /**
       * @description Duration of the file in seconds. Only applies to audio and video.
       * @example 0
       */
      duration?: number | null;
      /**
       * @description Where the file was embedded from.
       * @example null
       */
      embed?: string | null;
      /** @description Description for the file. */
      description?: string | null;
      /** @description Where the file was created. Is automatically populated based on Exif data for images. */
      location?: string | null;
      /** @description Tags for the file. Is automatically populated based on Exif data for images. */
      tags?: string[] | null;
      /** @description IPTC, Exif, and ICC metadata extracted from file */
      metadata?: Record<string, never> | null;
      focal_point_x?: number | null;
      focal_point_y?: number | null;
      tus_id?: string | null;
      tus_data?: unknown;
      /**
       * Format: date-time
       * @description When the file was last uploaded/replaced.
       * @example 2019-12-03T00:10:15+00:00
       */
      uploaded_on?: string;
    };
    Folders: {
      /**
       * @description Unique identifier for the folder.
       * @example 0cf0e03d-4364-45df-b77b-ca61f61869d2
       */
      id?: string;
      /**
       * @description Name of the folder.
       * @example New York
       */
      name?: string;
      /**
       * @description Unique identifier of the parent folder. This allows for nested folders.
       * @example null
       */
      parent?: (string | components["schemas"]["Folders"]) | null;
    };
    Roles: {
      /**
       * @description Unique identifier for the role.
       * @example 2f24211d-d928-469a-aea3-3c8f53d4e426
       */
      id?: string;
      /**
       * @description Name of the role.
       * @example Administrator
       */
      name?: string;
      /**
       * @description The role's icon.
       * @example verified_user
       */
      icon?: string;
      /**
       * @description Description of the role.
       * @example Admins have access to all managed data within the system by default
       */
      description?: string | null;
      /** @description $t:field_options.directus_roles.parent_note */
      parent?: (string | components["schemas"]["Roles"]) | null;
      children?: (string[] | components["schemas"]["Roles"][]) | null;
      policies?: unknown;
      users?: (string[] | components["schemas"]["Users"][]) | null;
    };
    Schema: {
      /** @example 1 */
      version?: number;
      directus?: string;
      vendor?: string;
      collections?: components["schemas"]["Collections"][];
      fields?: components["schemas"]["Fields"][];
      relations?: components["schemas"]["Relations"][];
    };
    Users: {
      /**
       * @description Unique identifier for the user.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      id?: string;
      /**
       * @description First name of the user.
       * @example Admin
       */
      first_name?: string;
      /**
       * @description Last name of the user.
       * @example User
       */
      last_name?: string;
      /**
       * Format: email
       * @description Unique email address for the user.
       * @example admin@example.com
       */
      email?: string;
      /** @description Password of the user. */
      password?: string;
      /**
       * @description The user's location.
       * @example null
       */
      location?: string | null;
      /**
       * @description The user's title.
       * @example null
       */
      title?: string | null;
      /**
       * @description The user's description.
       * @example null
       */
      description?: string | null;
      /**
       * @description The user's tags.
       * @example null
       */
      tags?: string[] | null;
      /**
       * @description The user's avatar.
       * @example null
       */
      avatar?: (string | components["schemas"]["Files"]) | null;
      /**
       * @description The user's language used in Directus.
       * @example en-US
       */
      language?: string;
      /**
       * @description The 2FA secret string that's used to generate one time passwords.
       * @example null
       */
      tfa_secret?: string | null;
      /**
       * @description Status of the user.
       * @example active
       * @enum {string}
       */
      status?: "active" | "invited" | "draft" | "suspended" | "deleted";
      /**
       * @description Unique identifier of the role of this user.
       * @example 2f24211d-d928-469a-aea3-3c8f53d4e426
       */
      role?: string | components["schemas"]["Roles"];
      /** @description Static token for the user. */
      token?: string | null;
      /**
       * Format: date-time
       * @description When this user used the API last.
       * @example 2020-05-31T14:32:37Z
       */
      last_access?: string | null;
      /**
       * @description Last page that the user was on.
       * @example /my-project/settings/collections/a
       */
      last_page?: string | null;
      provider?: string;
      external_identifier?: string | null;
      auth_data?: unknown;
      email_notifications?: boolean | null;
      appearance?: string | null;
      theme_dark?: string | null;
      theme_light?: string | null;
      theme_light_overrides?: unknown;
      theme_dark_overrides?: unknown;
      text_direction?: string;
      policies?: unknown;
    };
    Query: {
      /**
       * @description Control what fields are being returned in the object.
       * @example [
       *       "*",
       *       "*.*"
       *     ]
       */
      fields?: string[];
      /**
       * @example {
       *       "<field>": {
       *         "<operator>": "<value>"
       *       }
       *     }
       */
      filter?: Record<string, never>;
      /** @description Filter by items that contain the given search query in one of their fields. */
      search?: string;
      /**
       * @description How to sort the returned items.
       * @example [
       *       "-date_created"
       *     ]
       */
      sort?: string[];
      /** @description Set the maximum number of items that will be returned */
      limit?: number;
      /** @description How many items to skip when fetching data. */
      offset?: number;
      /** @description Cursor for use in pagination. Often used in combination with limit. */
      page?: number;
      /**
       * @description Deep allows you to set any of the other query parameters on a nested relational dataset.
       * @example {
       *       "related_articles": {
       *         "_limit": 3
       *       }
       *     }
       */
      deep?: Record<string, never>;
    };
    "x-metadata": {
      /** @description Returns the total item count of the collection you're querying. */
      total_count?: number;
      /** @description Returns the item count of the collection you're querying, taking the current filter/search parameters into account. */
      filter_count?: number;
    };
    Activity: {
      /**
       * @description Unique identifier for the object.
       * @example 2
       */
      id?: number;
      /**
       * @description Action that was performed.
       * @example update
       * @enum {string}
       */
      action?: "create" | "update" | "delete" | "login";
      /** @description The user who performed this action. */
      user?: (string | components["schemas"]["Users"]) | null;
      /**
       * Format: date-time
       * @description When the action happened.
       * @example 2019-12-05T22:52:09Z
       */
      timestamp?: string;
      /**
       * @description The IP address of the user at the time the action took place.
       * @example 127.0.0.1
       */
      ip?: string;
      /**
       * @description User agent string of the browser the user used when the action took place.
       * @example Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML,like Gecko) Chrome/78.0.3904.108 Safari/537.36
       */
      user_agent?: string;
      /** @description Collection identifier in which the item resides. */
      collection?: string | components["schemas"]["Collections"];
      /**
       * @description Unique identifier for the item the action applied to. This is always a string, even for integer primary keys.
       * @example 328
       */
      item?: string;
      /**
       * @description Origin of the request when the action took place.
       * @example https://directus.io
       */
      origin?: string;
      revisions?: (number[] | components["schemas"]["Revisions"][]) | null;
    };
    Permissions: {
      /**
       * @description Unique identifier for the permission.
       * @example 1
       */
      id?: number;
      /**
       * @description What collection this permission applies to.
       * @example customers
       */
      collection?: string;
      /**
       * @description What action this permission applies to.
       * @example create
       * @enum {string}
       */
      action?: "create" | "read" | "update" | "delete";
      /** @description JSON structure containing the permissions checks for this permission. */
      permissions?: Record<string, never> | null;
      /** @description JSON structure containing the validation checks for this permission. */
      validation?: Record<string, never> | null;
      /** @description JSON structure containing the preset value for created/updated items. */
      presets?: Record<string, never> | null;
      /** @description CSV of fields that the user is allowed to interact with. */
      fields?: string[] | null;
      policy?: unknown;
    };
    Fields: {
      id?: number;
      /**
       * @description Unique name of the collection this field is in.
       * @example about_us
       */
      collection?: string;
      /**
       * @description Unique name of the field. Field name is unique within the collection.
       * @example id
       */
      field?: string;
      special?: string[] | null;
      interface?: string | null;
      options?: unknown;
      display?: string | null;
      display_options?: unknown;
      readonly?: boolean;
      hidden?: boolean;
      sort?: number | null;
      width?: string | null;
      translations?: unknown;
      note?: string | null;
      conditions?: unknown;
      required?: boolean | null;
      group?: (number | components["schemas"]["Fields"]) | null;
      validation?: unknown;
      validation_message?: string | null;
    };
    Collections: {
      /**
       * @description The collection key.
       * @example customers
       */
      collection?: string;
      icon?: string | null;
      note?: string | null;
      display_template?: string | null;
      hidden?: boolean;
      singleton?: boolean;
      translations?: unknown;
      archive_field?: string | null;
      archive_app_filter?: boolean;
      archive_value?: string | null;
      unarchive_value?: string | null;
      sort_field?: string | null;
      accountability?: string | null;
      color?: string | null;
      item_duplication_fields?: unknown;
      sort?: number | null;
      group?: (string | components["schemas"]["Collections"]) | null;
      collapse?: string;
      preview_url?: string | null;
      versioning?: boolean;
    };
    Presets: {
      /**
       * @description Unique identifier for this single collection preset.
       * @example 155
       */
      id?: number;
      /** @description Name for the bookmark. If this is set, the preset will be considered a bookmark. */
      bookmark?: string | null;
      /**
       * @description The unique identifier of the user to whom this collection preset applies.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      user?: (string | components["schemas"]["Users"]) | null;
      /**
       * @description The unique identifier of a role in the platform. If `user` is null, this will be used to apply the collection preset or bookmark for all users in the role.
       * @example 50419801-0f30-8644-2b3c-9bc2d980d0a0
       */
      role?: (string | components["schemas"]["Roles"]) | null;
      /**
       * @description What collection this collection preset is used for.
       * @example articles
       */
      collection?: string | components["schemas"]["Collections"];
      /** @description Search query. */
      search?: string | null;
      /**
       * @description Key of the layout that is used.
       * @example null
       */
      layout?: string;
      /**
       * @description Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters.
       * @example {
       *       "cards": {
       *         "sort": "-published_on"
       *       }
       *     }
       */
      layout_query?: unknown;
      /**
       * @description Options of the views. The properties in here are controlled by the layout.
       * @example {
       *       "cards": {
       *         "icon": "account_circle",
       *         "title": "{{ first_name }} {{ last_name }}",
       *         "subtitle": "{{ title }}",
       *         "size": 3
       *       }
       *     }
       */
      layout_options?: unknown;
      refresh_interval?: number | null;
      filter?: unknown;
      icon?: string | null;
      color?: string | null;
    };
    Relations: {
      /**
       * @description Unique identifier for the relation.
       * @example 1
       */
      id?: number;
      /**
       * @description Collection that has the field that holds the foreign key.
       * @example directus_activity
       */
      many_collection?: string;
      /**
       * @description Foreign key. Field that holds the primary key of the related collection.
       * @example user
       */
      many_field?: string;
      /**
       * @description Collection on the _one_ side of the relationship.
       * @example directus_users
       */
      one_collection?: string;
      /**
       * @description Alias column that serves as the _one_ side of the relationship.
       * @example null
       */
      one_field?: string | null;
      one_collection_field?: string | null;
      one_allowed_collections?: string[] | null;
      /**
       * @description Field on the junction table that holds the many field of the related relation.
       * @example null
       */
      junction_field?: string | null;
      sort_field?: string | null;
      one_deselect_action?: string;
    };
    Revisions: {
      /**
       * @description Unique identifier for the revision.
       * @example 1
       */
      id?: number;
      /**
       * @description Unique identifier for the activity record.
       * @example 2
       */
      activity?: number | components["schemas"]["Activity"];
      /**
       * @description Collection of the updated item.
       * @example articles
       */
      collection?: string | components["schemas"]["Collections"];
      /**
       * @description Primary key of updated item.
       * @example 168
       */
      item?: string;
      /**
       * @description Copy of item state at time of update.
       * @example {
       *       "author": 1,
       *       "body": "This is my first post",
       *       "featured_image": 15,
       *       "id": "168",
       *       "title": "Hello, World!"
       *     }
       */
      data?: Record<string, never> | null;
      /**
       * @description Changes between the previous and the current revision.
       * @example {
       *       "title": "Hello, World!"
       *     }
       */
      delta?: Record<string, never>;
      /**
       * @description If the current item was updated relationally, this is the id of the parent revision record
       * @example null
       */
      parent?: number | null;
      /**
       * @description Associated version of this revision.
       * @example draft
       */
      version?: string | components["schemas"]["Versions"];
    };
    Flows: {
      /**
       * @description Unique identifier for the flow.
       * @example 2f24211d-d928-469a-aea3-3c8f53d4e426
       */
      id?: string;
      /**
       * @description The name of the flow.
       * @example Update Articles Flow
       */
      name?: string;
      /**
       * @description Icon displayed in the Admin App for the flow.
       * @example bolt
       */
      icon?: string;
      /**
       * @description Color of the icon displayed in the Admin App for the flow.
       * @example #112233
       */
      color?: string | null;
      description?: string | null;
      /**
       * @description Current status of the flow.
       * @default active
       * @example active
       * @enum {string}
       */
      status: "active" | "inactive";
      /**
       * @description Type of trigger for the flow. One of `hook`, `webhook`, `operation`, `schedule`, `manual`.
       * @example manual
       */
      trigger?: string;
      /**
       * @description The permission used during the flow. One of `$public`, `$trigger`, `$full`, or UUID of a role.
       * @example $trigger
       */
      accountability?: string;
      /**
       * @description Options of the selected trigger for the flow.
       * @example null
       */
      options?: Record<string, never> | null;
      /**
       * @description UUID of the operation connected to the trigger in the flow.
       * @example 92e82998-e421-412f-a513-13701e83e4ce
       */
      operation?: string | components["schemas"]["Operations"];
      /**
       * Format: date-time
       * @description Timestamp in ISO8601 when the flow was created.
       * @example 2022-05-11T13:14:52Z
       */
      date_created?: string | null;
      /**
       * @description The user who created the flow.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      user_created?: string | components["schemas"]["Users"];
      operations?: (string[] | components["schemas"]["Operations"][]) | null;
    };
    Operations: {
      /**
       * @description Unique identifier for the operation.
       * @example 2f24211d-d928-469a-aea3-3c8f53d4e426
       */
      id?: string;
      /**
       * @description The name of the operation.
       * @example Log to Console
       */
      name?: string;
      /**
       * @description Key for the operation. Must be unique within a given flow.
       * @example log_console
       */
      key?: string;
      /**
       * @description Type of operation. One of `log`, `mail`, `notification`, `create`, `read`, `request`, `sleep`, `transform`, `trigger`, `condition`, or any type of custom operation extensions.
       * @example log
       */
      type?: string;
      /**
       * @description Position of the operation on the X axis within the flow workspace.
       * @example 12
       */
      position_x?: number;
      /**
       * @description Position of the operation on the Y axis within the flow workspace.
       * @example 12
       */
      position_y?: number;
      /**
       * @description Options depending on the type of the operation.
       * @example null
       */
      options?: Record<string, never> | null;
      /**
       * @description The operation triggered when the current operation succeeds (or `then` logic of a condition operation).
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      resolve?: string | components["schemas"]["Operations"];
      /**
       * @description The operation triggered when the current operation fails (or `otherwise` logic of a condition operation).
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      reject?: string | components["schemas"]["Operations"];
      flow?: string | components["schemas"]["Flows"];
      /**
       * Format: date-time
       * @description Timestamp in ISO8601 when the operation was created.
       * @example 2022-05-11T13:14:52Z
       */
      date_created?: string | null;
      /**
       * @description The user who created the operation.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      user_created?: string | components["schemas"]["Users"];
    };
    Webhooks: {
      /**
       * @description The index of the webhook.
       * @example 1
       */
      id?: number;
      /**
       * @description The name of the webhook.
       * @example create articles
       */
      name?: string;
      /**
       * @description Method used in the webhook.
       * @example POST
       */
      method?: string;
      /**
       * @description The url of the webhook.
       * @example null
       */
      url?: string | null;
      /**
       * @description The status of the webhook.
       * @example inactive
       */
      status?: string;
      /**
       * @description If yes, send the content of what was done
       * @example true
       */
      data?: boolean;
      /**
       * @description The actions that triggers this webhook.
       * @example null
       */
      actions?: string[] | null;
      collections?: string[];
      headers?: unknown;
      was_active_before_deprecation?: boolean;
      migrated_flow?: (string | components["schemas"]["Flows"]) | null;
    };
    Extensions: {
      enabled?: boolean;
      /** Format: uuid */
      id?: string;
      folder?: string;
      source?: string;
      /**
       * @description Name of the bundle the extension is in.
       * @example directus-extension-my-bundle
       */
      bundle?: string | null;
    };
    Versions: {
      /**
       * @description Primary key of the Content Version.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      id?: string;
      /**
       * @description Key of the Content Version, used as the value for the "version" query parameter.
       * @example draft
       */
      key?: string;
      /**
       * @description Descriptive name of the Content Version.
       * @example My Draft
       */
      name?: string;
      /**
       * @description Name of the collection the Content Version is created on.
       * @example articles
       */
      collection?: string | components["schemas"]["Collections"];
      /**
       * @description The item the Content Version is created on.
       * @example 168
       */
      item?: string;
      hash?: string | null;
      /**
       * Format: date-time
       * @description When the Content Version was created.
       * @example 2022-05-11T13:14:52Z
       */
      date_created?: string | null;
      /**
       * Format: date-time
       * @description When the Content Version was last updated.
       * @example 2022-05-11T13:14:53Z
       */
      date_updated?: string | null;
      /**
       * @description User that created the Content Version.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      user_created?: string | components["schemas"]["Users"];
      /**
       * @description User that last updated the Content Version.
       * @example 63716273-0f29-4648-8a2a-2af2948f6f78
       */
      user_updated?: string | components["schemas"]["Users"];
      /**
       * @description The current changes compared to the main version of the item.
       * @example {
       *       "my_field": "Updated Value"
       *     }
       */
      delta?: Record<string, never>;
    };
    Comments: {
      /**
       * @description Unique identifier for this single collection preset.
       * @example 81dfa7e0-56d2-471f-b96a-1cf8a62bdf28
       */
      id?: string;
      /**
       * @description The collection of the item the Comment is created for.
       * @example articles
       */
      collection?: string | components["schemas"]["Collections"];
      /**
       * @description The item the Comment is created for.
       * @example 123
       */
      item?: string;
      /**
       * @description User comment. This will store the comments that show up in the right sidebar of the item edit page in the admin app.
       * @example This is a comment
       */
      comment?: string;
      /**
       * Format: date-time
       * @description When the Comment was created.
       * @example 2024-01-23T12:34:56Z
       */
      date_created?: string | null;
      /**
       * Format: date-time
       * @description When the Comment was updated.
       * @example 2024-01-23T12:34:56Z
       */
      date_updated?: string | null;
      /**
       * @description User that created the Comment.
       * @example 81dfa7e0-56d2-471f-b96a-1cf8a62bdf28
       */
      user_created?: string | components["schemas"]["Users"];
      /**
       * @description User that updated the Comment.
       * @example 81dfa7e0-56d2-471f-b96a-1cf8a62bdf28
       */
      user_updated?: string | components["schemas"]["Users"];
    };
    Settings: {
      /**
       * @description Unique identifier for the setting.
       * @example 1
       */
      id?: number;
      /**
       * @description The name of the project.
       * @example Directus
       */
      project_name?: string;
      /**
       * @description The url of the project.
       * @example null
       */
      project_url?: string | null;
      /**
       * @description The brand color of the project.
       * @example null
       */
      project_color?: string | null;
      /**
       * @description The logo of the project.
       * @example null
       */
      project_logo?: string | null;
      /**
       * @description The foreground of the project.
       * @example null
       */
      public_foreground?: string | null;
      /**
       * @description The background of the project.
       * @example null
       */
      public_background?: {
        id?: string;
        type?: string;
      } | null;
      /**
       * @description Note rendered on the public pages of the app.
       * @example null
       */
      public_note?: string | null;
      /**
       * @description Allowed authentication login attempts before the user's status is set to blocked.
       * @example 25
       */
      auth_login_attempts?: number;
      /** @description Authentication password policy. */
      auth_password_policy?: string | null;
      /**
       * @description What transformations are allowed in the assets endpoint.
       * @example all
       * @enum {string|null}
       */
      storage_asset_transform?: "all" | "none" | "presets" | null;
      /**
       * @description Array of allowed
       * @example null
       */
      storage_asset_presets?:
        | {
            /** @description Key for the asset. Used in the assets endpoint. */
            key?: string;
            /**
             * @description Whether to crop the thumbnail to match the size, or maintain the aspect ratio.
             * @enum {string}
             */
            fit?: "cover" | "contain" | "inside" | "outside";
            /** @description Width of the thumbnail. */
            width?: number;
            /** @description Height of the thumbnail. */
            height?: number;
            /** @description No image upscale */
            withoutEnlargement?: boolean;
            /** @description Quality of the compression used. */
            quality?: number;
            /**
             * @description Reformat output image
             * @enum {string}
             */
            format?: "" | "jpeg" | "png" | "webp" | "tiff" | "avif";
            /** @description Additional transformations to apply */
            transforms?:
              | {
                  /** @description The Sharp method name */
                  method?: string;
                  /** @description A list of arguments to pass to the Sharp method */
                  arguments?:
                    | {
                        /** @description A JSON representation of the argument value */
                        argument?: string;
                      }[]
                    | null;
                }[]
              | null;
          }[]
        | null;
      custom_css?: string | null;
      /**
       * Format: uuid
       * @description Default folder to place files
       */
      storage_default_folder?: string;
      basemaps?: unknown;
      mapbox_key?: string | null;
      module_bar?: unknown;
      project_descriptor?: string | null;
      default_language?: string;
      custom_aspect_ratios?: unknown;
      /** @description $t:field_options.directus_settings.project_favicon_note */
      public_favicon?: (string | components["schemas"]["Files"]) | null;
      default_appearance?: string;
      default_theme_light?: string | null;
      theme_light_overrides?: unknown;
      default_theme_dark?: string | null;
      theme_dark_overrides?: unknown;
      report_error_url?: string | null;
      report_bug_url?: string | null;
      report_feature_url?: string | null;
      /** @description $t:fields.directus_settings.public_registration_note */
      public_registration?: boolean;
      /** @description $t:fields.directus_settings.public_registration_verify_email_note */
      public_registration_verify_email?: boolean;
      /** @description $t:fields.directus_settings.public_registration_role_note */
      public_registration_role?:
        | (string | components["schemas"]["Roles"])
        | null;
      /** @description $t:fields.directus_settings.public_registration_email_filter_note */
      public_registration_email_filter?: unknown;
      visual_editor_urls?: unknown;
      accepted_terms?: boolean | null;
      /** Format: uuid */
      project_id?: string | null;
      /** @description $t:fields.directus_settings.mcp_enabled_note */
      mcp_enabled?: boolean;
      /** @description $t:fields.directus_settings.mcp_allow_deletes_note */
      mcp_allow_deletes?: boolean;
      /** @description $t:fields.directus_settings.mcp_prompts_collection_note */
      mcp_prompts_collection?: string | null;
      /** @description $t:fields.directus_settings.mcp_system_prompt_enabled_note */
      mcp_system_prompt_enabled?: boolean;
      /** @description $t:fields.directus_settings.mcp_system_prompt_note */
      mcp_system_prompt?: string | null;
    };
    ItemsDirectusSyncIDMap: {
      id?: number;
      table: string;
      sync_id: string;
      local_id: string;
      /** Format: timestamp */
      created_at?: string | null;
    };
    ItemsGameStarSocialLinks: {
      social_type?: string | null;
      id?: number;
      social_account?: string | null;
      social_link?: string | null;
    };
    ItemsEvents: {
      meals?: unknown;
      price?: number | null;
      id?: number;
      /** @description Unique url name of the event, e.g. "icbd-2025" */
      slug?: string | null;
      banner?: (string | components["schemas"]["Files"]) | null;
      registration_count?: number;
      /** Format: date-time */
      staffing_from?: string | null;
      staffingShiftSize?: number | null;
      opened?: boolean | null;
      staffingTypes?: unknown;
      /** @description Appears under: Your registration to Event is successful ! */
      confirmation_text?: string | null;
      name?: string | null;
      /** Format: date-time */
      from?: string | null;
      type?: string | null;
      /** @description Appears at the top of the form */
      intro_text?: string | null;
      /** Format: date-time */
      to?: string | null;
      max_registrations?: number | null;
      background_color?: string | null;
      /**
       * Format: uuid
       * @description Admin panel at https://clic.epfl.ch/clicketing/$slug/$password
       */
      admin_secret?: string | null;
      /** Format: date-time */
      staffing_to?: string | null;
      icbd_event?: (number | components["schemas"]["ItemsIcbd"]) | null;
    };
    ItemsMembers: {
      link?: string | null;
      surname?: string | null;
      sciper?: string | null;
      id?: number;
      name?: string | null;
      picture?: (string | components["schemas"]["Files"]) | null;
      /** @description Poll Count used by RoboCLIC. */
      poll_count?: number | null;
      email?: string | null;
    };
    ItemsCommissionMemberships: {
      member: number | components["schemas"]["ItemsMembers"];
      id?: number;
      level?: string | null;
      commission: number | components["schemas"]["ItemsCommissions"];
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsCommissionMembershipsTranslations"][]
          )
        | null;
    };
    ItemsCommissions: {
      id?: number;
      slug?: string | null;
      logo?: (string | components["schemas"]["Files"]) | null;
      name?: string | null;
      email?: string | null;
      social_links?:
        | (number[] | components["schemas"]["ItemsCommissionsSocialLinks"][])
        | null;
      partners?: (number[] | components["schemas"]["ItemsPartners"][]) | null;
      translations?:
        | (number[] | components["schemas"]["ItemsCommissionsTranslations"][])
        | null;
    };
    ItemsLanguages: {
      name?: string | null;
      code: string;
    };
    ItemsGameStarArticlesTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      game_star_articles_id?:
        | (number | components["schemas"]["ItemsGameStarArticles"])
        | null;
      content?: string | null;
      cover_image?: (string | components["schemas"]["Files"]) | null;
      title?: string | null;
    };
    ItemsGameStarArticles: {
      id?: number;
      slug?: string | null;
      status?: string | null;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsGameStarArticlesTranslations"][]
          )
        | null;
    };
    ItemsNewsTranslations: {
      description: string;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      banner?: (string | components["schemas"]["Files"]) | null;
      content: string;
      news_id?: (number | components["schemas"]["ItemsNews"]) | null;
      title: string;
    };
    ItemsNews: {
      id?: number;
      /** Format: timestamp */
      date_created?: string | null;
      slug?: string | null;
      status?: string;
      video_link?: string | null;
      user_created?: (string | components["schemas"]["Users"]) | null;
      /** Format: timestamp */
      date_updated?: string | null;
      sort?: number | null;
      commissions?:
        | (number[] | components["schemas"]["ItemsNewsCommissions"][])
        | null;
      partners?:
        | (number[] | components["schemas"]["ItemsNewsPartners"][])
        | null;
      translations?:
        | (number[] | components["schemas"]["ItemsNewsTranslations"][])
        | null;
    };
    ItemsGameStarProjectsTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      content?: string | null;
      cover_image?: (string | components["schemas"]["Files"]) | null;
      game_star_projects_id?:
        | (number | components["schemas"]["ItemsGameStarProjects"])
        | null;
      title?: string | null;
    };
    ItemsGameStarProjects: {
      id?: number;
      slug?: string | null;
      status?: string | null;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsGameStarProjectsTranslations"][]
          )
        | null;
    };
    ItemsStdCellTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      detail_button_title?: string | null;
      std_cell_id?: (number | components["schemas"]["ItemsStdCell"]) | null;
      /** @description This will replace the date by this text. (optional) */
      date_replacement?: string | null;
      title: string;
    };
    ItemsStdCell: {
      image?: (string | components["schemas"]["Files"]) | null;
      id?: number;
      recurrence?: string | null;
      sort_order?: number | null;
      button_color?: string | null;
      text_color?: string | null;
      /** Format: date */
      date?: string | null;
      url?: string | null;
      commission?: (number | components["schemas"]["ItemsCommissions"]) | null;
      background_color?: string | null;
      translations?:
        | (number[] | components["schemas"]["ItemsStdCellTranslations"][])
        | null;
    };
    ItemsPartners: {
      link?: string | null;
      id?: number;
      logo?: (string | components["schemas"]["Files"]) | null;
      category?:
        | (number | components["schemas"]["ItemsPartnerCategory"])
        | null;
      name?: string | null;
      /** Format: date */
      end?: string | null;
      commission?: (number | components["schemas"]["ItemsCommissions"]) | null;
      /** Format: date */
      start?: string | null;
    };
    ItemsAssociationPartners: {
      id?: number;
      partners_id?: (number | components["schemas"]["ItemsPartners"]) | null;
      association_id?:
        | (number | components["schemas"]["ItemsAssociation"])
        | null;
    };
    ItemsAssociation: {
      id?: number;
      public_files?:
        | (number | components["schemas"]["ItemsAssociationPublicFiles"])
        | null;
      phone?: string | null;
      logo?: (string | components["schemas"]["Files"]) | null;
      address?: string | null;
      preview_image?: (string | components["schemas"]["Files"]) | null;
      name?: string | null;
      email?: string | null;
      social_links?:
        | (number[] | components["schemas"]["ItemsAssociationSocialLinks"][])
        | null;
      partners?:
        | (number[] | components["schemas"]["ItemsAssociationPartners"][])
        | null;
      translations?:
        | (number[] | components["schemas"]["ItemsAssociationTranslations"][])
        | null;
    };
    ItemsGalleries: {
      link?: string | null;
      id?: number;
      preview?: (string | components["schemas"]["Files"]) | null;
      name?: string | null;
      /** Format: date */
      date?: string | null;
    };
    ItemsGameStarEventsTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      content?: string | null;
      cover_image?: (string | components["schemas"]["Files"]) | null;
      game_star_events_id?:
        | (number | components["schemas"]["ItemsGameStarEvents"])
        | null;
      title?: string | null;
    };
    ItemsGameStarEvents: {
      id?: number;
      slug?: string | null;
      status?: string | null;
      /** Format: date-time */
      end?: string | null;
      /** Format: date-time */
      start?: string | null;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsGameStarEventsTranslations"][]
          )
        | null;
    };
    ItemsCommissionsSocialLinks: {
      id?: number;
      commissions_id?:
        | (number | components["schemas"]["ItemsCommissions"])
        | null;
      social_links_id?:
        | (number | components["schemas"]["ItemsSocialLinks"])
        | null;
    };
    ItemsSocialLinks: {
      link?: string | null;
      id?: number;
      account_name?: string | null;
      logo?: (string | components["schemas"]["Files"]) | null;
      media_name?: string | null;
    };
    ItemsSubsonic: {
      header_image?: (string | components["schemas"]["Files"]) | null;
      id?: number;
      logo?: (string | components["schemas"]["Files"]) | null;
      map?: (string | components["schemas"]["Files"]) | null;
      translations?:
        | (number[] | components["schemas"]["ItemsSubsonicTranslations"][])
        | null;
    };
    ItemsIcbdTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      icbd_id?: (number | components["schemas"]["ItemsIcbd"]) | null;
      registration_instructions?: string | null;
    };
    ItemsIcbd: {
      id?: number;
      /** Format: time */
      end_time: string;
      slug?: string | null;
      logo?: (string | components["schemas"]["Files"]) | null;
      /** Format: time */
      start_time: string;
      /** Format: date */
      date: string;
      place?: string | null;
      presentation_video?: string | null;
      speakers?:
        | (number[] | components["schemas"]["ItemsIcbdSpeakers"][])
        | null;
      phds?: (number[] | components["schemas"]["ItemsIcbdPhds"][]) | null;
      activities?:
        | (number[] | components["schemas"]["ItemsIcbdActivities"][])
        | null;
      translations?:
        | (number[] | components["schemas"]["ItemsIcbdTranslations"][])
        | null;
      partners_images?:
        | (number[] | components["schemas"]["ItemsIcbdFiles"][])
        | null;
    };
    ItemsSavetheDateTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      save_the_date_id?:
        | (number | components["schemas"]["ItemsSavetheDate"])
        | null;
      title?: string | null;
    };
    ItemsSavetheDate: {
      image?: (string | components["schemas"]["Files"]) | null;
      id?: number;
      button_color?: string | null;
      text_color?: string | null;
      title_color?: string | null;
      background_color?: string | null;
      language_button_target?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      translations?:
        | (number[] | components["schemas"]["ItemsSavetheDateTranslations"][])
        | null;
    };
    ItemsAssociationPublicFiles: {
      link?: string | null;
      icon?: (string | components["schemas"]["Files"]) | null;
      id?: number;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsAssociationPublicFilesTranslations"][]
          )
        | null;
    };
    ItemsIcbdFiles: {
      id?: number;
      directus_files_id?: (string | components["schemas"]["Files"]) | null;
      icbd_id?: (number | components["schemas"]["ItemsIcbd"]) | null;
    };
    ItemsIcbdActivities: {
      icon?: (string | components["schemas"]["Files"]) | null;
      id?: number;
      icbd_id?: (number | components["schemas"]["ItemsIcbd"]) | null;
      type?: string | null;
      timeslots?: unknown;
      color?: string | null;
      hosts?:
        | (
            | number[]
            | components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"][]
          )
        | null;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsIcbdActivitiesTranslations"][]
          )
        | null;
    };
    ItemsAssociationTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      banner?: (string | components["schemas"]["Files"]) | null;
      association_id?:
        | (number | components["schemas"]["ItemsAssociation"])
        | null;
    };
    ItemsIcbdSpeakers: {
      id?: number;
      last_name?: string | null;
      icbd_id?: (number | components["schemas"]["ItemsIcbd"]) | null;
      company?: string | null;
      picture?: (string | components["schemas"]["Files"]) | null;
      first_name?: string | null;
      linkedin?: string | null;
    };
    ItemsRegistrations: {
      is_staff?: boolean | null;
      confirmation_email_sent?: boolean | null;
      team?: string | null;
      /** Format: uuid */
      id: string;
      section?: string | null;
      meal?: number | null;
      registration_complete?: boolean | null;
      registration_email_sent?: boolean | null;
      year?: string | null;
      comments?: string | null;
      payment?: string | null;
      plusOnes?: number | null;
      event?: (number | components["schemas"]["ItemsEvents"]) | null;
      late_payment?: boolean | null;
      availability?: unknown;
      family_name?: string | null;
      plusOnesCheckedIn?: number | null;
      checked_in?: boolean | null;
      guest?: boolean | null;
      retreived_deposit?: boolean | null;
      can_retreive_deposit?: boolean | null;
      first_name?: string | null;
      email?: string | null;
      allergies?: string | null;
      preferences?: unknown;
    };
    ItemsArtists: {
      link?: string | null;
      image?: (string | components["schemas"]["Files"]) | null;
      id?: number;
      /** Format: time */
      end_time?: string | null;
      /** Format: time */
      start_time?: string | null;
      name?: string | null;
    };
    ItemsSubsonicTranslations: {
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      subsonic_id?: (number | components["schemas"]["ItemsSubsonic"]) | null;
      info?: string | null;
    };
    ItemsIcbdActivitiesRegistrations: {
      id?: number;
      icbd_activity?:
        | (number | components["schemas"]["ItemsIcbdActivities"])
        | null;
      registration?:
        | (string | components["schemas"]["ItemsRegistrations"])
        | null;
      attended?: boolean | null;
      /** Format: time */
      start?: string | null;
    };
    ItemsAssociationSocialLinks: {
      id?: number;
      social_links_id?:
        | (number | components["schemas"]["ItemsSocialLinks"])
        | null;
      association_id?:
        | (number | components["schemas"]["ItemsAssociation"])
        | null;
    };
    ItemsAssociationPolesTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      association_poles_id?:
        | (number | components["schemas"]["ItemsAssociationPoles"])
        | null;
      name?: string | null;
    };
    ItemsAssociationPoles: {
      id?: number;
      slug: string;
      mail?: string | null;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsAssociationPolesTranslations"][]
          )
        | null;
    };
    ItemsNewsPartners: {
      id?: number;
      partners_id?: (number | components["schemas"]["ItemsPartners"]) | null;
      news_id?: (number | components["schemas"]["ItemsNews"]) | null;
    };
    ItemsGameStarTranslations: {
      about_title?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      game_star_id?: (number | components["schemas"]["ItemsGameStar"]) | null;
      about_text?: string | null;
    };
    ItemsGameStar: {
      id?: number;
      translations?:
        | (number[] | components["schemas"]["ItemsGameStarTranslations"][])
        | null;
    };
    ItemsAssociationMembershipsTranslations: {
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      association_memberships_id?:
        | (number | components["schemas"]["ItemsAssociationMemberships"])
        | null;
      title?: string | null;
    };
    ItemsAssociationMemberships: {
      member: number | components["schemas"]["ItemsMembers"];
      id?: number;
      level?: string | null;
      pole?: (number | components["schemas"]["ItemsAssociationPoles"]) | null;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsAssociationMembershipsTranslations"][]
          )
        | null;
    };
    ItemsIcbdPhds: {
      id?: number;
      last_name?: string | null;
      laboratory?: string | null;
      icbd_id?: (number | components["schemas"]["ItemsIcbd"]) | null;
      picture?: (string | components["schemas"]["Files"]) | null;
      first_name: string;
    };
    ItemsPartnerCategoryTranslations: {
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      /** @description Pluralized name of the category */
      name?: string | null;
      partner_category_id?:
        | (number | components["schemas"]["ItemsPartnerCategory"])
        | null;
    };
    ItemsPartnerCategory: {
      id?: number;
      /** @description 0 is the highest category (e.g. premium) */
      rank?: number | null;
      translations?:
        | (
            | number[]
            | components["schemas"]["ItemsPartnerCategoryTranslations"][]
          )
        | null;
    };
    ItemsInventory: {
      id?: number;
      tags?: unknown;
      column?: number | null;
      name?: string | null;
      /** Format: date */
      expiration_date?: string | null;
      /** @description Why it is usefull ? Where can we find it ? */
      details?: string | null;
      picture?: (string | components["schemas"]["Files"]) | null;
      row?: number | null;
      place?: string | null;
      commission?: (number | components["schemas"]["ItemsCommissions"]) | null;
      quantity?: number | null;
    };
    ItemsCommissionsTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      commissions_id?:
        | (number | components["schemas"]["ItemsCommissions"])
        | null;
      banner?: (string | components["schemas"]["Files"]) | null;
      small_description?: string | null;
    };
    ItemsIcbdActivitiesIcbdSpeakers: {
      id?: number;
      icbd_speakers_id?:
        | (number | components["schemas"]["ItemsIcbdSpeakers"])
        | null;
      icbd_activities_id?:
        | (number | components["schemas"]["ItemsIcbdActivities"])
        | null;
    };
    ItemsAssociationPublicFilesTranslations: {
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      name?: string | null;
      association_public_files_id?:
        | (number | components["schemas"]["ItemsAssociationPublicFiles"])
        | null;
    };
    ItemsCommissionMembershipsTranslations: {
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      title?: string | null;
      commission_memberships_id?:
        | (number | components["schemas"]["ItemsCommissionMemberships"])
        | null;
    };
    ItemsNewsCommissions: {
      id?: number;
      commissions_id?:
        | (number | components["schemas"]["ItemsCommissions"])
        | null;
      news_id?: (number | components["schemas"]["ItemsNews"]) | null;
    };
    ItemsIcbdActivitiesTranslations: {
      description?: string | null;
      languages_code?:
        | (string | components["schemas"]["ItemsLanguages"])
        | null;
      id?: number;
      name?: string | null;
      icbd_activities_id?:
        | (number | components["schemas"]["ItemsIcbdActivities"])
        | null;
    };
  };
  responses: {
    /** @description Error: Not found. */
    NotFoundError: {
      headers: {
        [name: string]: unknown;
      };
      content: {
        "application/json": {
          error?: {
            /** Format: int64 */
            code?: number;
            message?: string;
          };
        };
      };
    };
    /** @description Error: Unauthorized request */
    UnauthorizedError: {
      headers: {
        [name: string]: unknown;
      };
      content: {
        "application/json": {
          error?: {
            /** Format: int64 */
            code?: number;
            message?: string;
          };
        };
      };
    };
  };
  parameters: {
    /** @description Index */
    Id: number;
    /** @description Unique identifier for the object. */
    UUId: string;
    /** @description Collection of which you want to retrieve the items from. */
    Collection: string;
    /** @description Filter by items that contain the given search query in one of their fields. */
    Search: string;
    /** @description Cursor for use in pagination. Often used in combination with limit. */
    Page: number;
    /** @description How many items to skip when fetching data. */
    Offset: number;
    /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
    Sort: string[];
    /** @description What metadata to return in the response. */
    Meta: string;
    /** @description A limit on the number of objects that are returned. */
    Limit: number;
    /** @description Select items in collection by given conditions. */
    Filter: string;
    /** @description Control what fields are being returned in the object. */
    Fields: string[];
    /** @description Saves the API response to a file. Accepts one of "csv", "json", "xml", "yaml". */
    Export: "csv" | "json" | "xml" | "yaml";
    /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
    Version: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  getAsset: {
    parameters: {
      query?: {
        /** @description The key of the asset size configured in settings. */
        key?: string;
        /** @description A JSON array of image transformations */
        transforms?: string;
        /** @description Download the asset to your computer */
        download?: boolean;
      };
      header?: never;
      path: {
        /** @description The id of the file. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "text/plain": string;
        };
      };
      404: components["responses"]["NotFoundError"];
    };
  };
  login: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Email address of the user you're retrieving the access token for.
           * @example admin@example.com
           */
          email: string;
          /**
           * Format: password
           * @description Password of the user.
           * @example password
           */
          password: string;
          /**
           * @description Whether to retrieve the refresh token in the JSON response, or in a httpOnly cookie.
           * @default json
           * @enum {string}
           */
          mode?: "json" | "cookie" | "session";
          /** @description The user's one-time-password (if MFA is enabled). */
          otp?: string;
        };
      };
    };
    responses: {
      /** @description Successful authentification */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: {
              /** @example eyJhbGciOiJI... */
              access_token?: string;
              /** @example 900 */
              expires?: number;
              /** @example yuOJkjdPXMd... */
              refresh_token?: string;
            };
          };
        };
      };
    };
  };
  refresh: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description JWT access token you want to refresh. This token can't be expired.
           * @example eyJ0eXAiOiJKV...
           */
          refresh_token?: string;
          /**
           * @description Whether to submit and retrieve the refresh token in the JSON response, or in a httpOnly cookie.
           * @default json
           * @enum {string}
           */
          mode?: "json" | "cookie" | "session";
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: {
              /** @example eyJhbGciOiJI... */
              access_token?: string;
              /** @example 900 */
              expires?: number;
              /** @example Gy-caJMpmGTA... */
              refresh_token?: string;
            };
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  logout: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description The refresh token to invalidate. If you have the refresh token in a cookie through /auth/login, you don't have to submit it here.
           * @example eyJ0eXAiOiJKV...
           */
          refresh_token?: string;
          /**
           * @description Whether the refresh token is submitted in the JSON response, or in a httpOnly cookie.
           * @enum {string}
           */
          mode?: "json" | "cookie" | "session";
        };
      };
    };
    responses: {
      /** @description Request successful */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  passwordRequest: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Email address of the user you're requesting a reset for.
           * @example admin@example.com
           */
          email: string;
        };
      };
    };
    responses: {
      401: components["responses"]["UnauthorizedError"];
    };
  };
  passwordReset: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description One-time use JWT token that is used to verify the user.
           * @example eyJ0eXAiOiJKV1Qi...
           */
          token: string;
          /**
           * Format: password
           * @description New password for the user.
           * @example password
           */
          password: string;
        };
      };
    };
    responses: {
      401: components["responses"]["UnauthorizedError"];
    };
  };
  oauth: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            public?: boolean;
            /**
             * @example [
             *       "github",
             *       "facebook"
             *     ]
             */
            data?: string[];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  oauthProvider: {
    parameters: {
      query?: {
        /** @description Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned. */
        redirect?: string;
      };
      header?: never;
      path: {
        /** @description Key of the activated OAuth provider. */
        provider: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            public?: boolean;
            data?: {
              token?: string;
            };
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  schemaSnapshot: {
    parameters: {
      query?: {
        /** @description Saves the API response to a file. Accepts one of "csv", "json", "xml", "yaml". */
        export?: components["parameters"]["Export"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Schema"];
          };
          "text/yaml": string;
        };
      };
      403: components["responses"]["UnauthorizedError"];
    };
  };
  schemaApply: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          data?: components["schemas"]["Diff"];
        };
        "multipart/form-data": {
          /** Format: binary */
          file?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      403: components["responses"]["UnauthorizedError"];
    };
  };
  schemaDiff: {
    parameters: {
      query?: {
        /** @description Bypass version and database vendor restrictions. */
        force?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          data?: components["schemas"]["Schema"];
        };
        "multipart/form-data": {
          /** Format: binary */
          file?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Diff"];
          };
        };
      };
      /** @description No schema difference. */
      204: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      403: components["responses"]["UnauthorizedError"];
    };
  };
  serverInfo: {
    parameters: {
      query: {
        /** @description The first time you create a project, the provided token will be saved and required for subsequent project installs. It can also be found and configured in `/config/__api.json` on your server. */
        super_admin_token: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: Record<string, never>;
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  ping: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/text": string;
        };
      };
    };
  };
  "hash-generate": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description String to hash. */
          string: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example $argon2i$v=19$m=4096,t=3,p=1$pOyIa/zmRAjCVLb2f7kOyg$DasoO6LzMM+6iKfzCDq6JbsYsZWLSm33p7i9NxL9mDc */
            data?: string;
          };
        };
      };
    };
  };
  "hash-verify": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description String to hash. */
          string: string;
          /** @description Hash you want to verify against. */
          hash: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example true */
            data?: boolean;
          };
        };
      };
    };
  };
  sort: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Collection identifier */
        collection: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Primary key of item to move */
          item?: number;
          /** @description Primary key of item where to move the current item to */
          to?: number;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  import: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Collection identifier */
        collection: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "multipart/form-data": {
          /** Format: binary */
          file?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  export: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Collection identifier */
        collection: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description What file format to save the export to. One of csv, xml, json
           * @enum {string}
           */
          format: "csv" | "xml" | "json";
          query: components["schemas"]["Query"];
          file: components["schemas"]["Files"];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  "clear-cache": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  random: {
    parameters: {
      query?: {
        /** @description Length of the random string. */
        length?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example 1>M3+4oh.S */
            data?: string;
          };
        };
      };
    };
  };
  getActivities: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Activity"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getActivity: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Activity"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getPermissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        page?: components["parameters"]["Page"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Permissions"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createPermission: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description What collection this permission applies to.
           * @example customers
           */
          collection?: string;
          /**
           * @description If the user can post comments.
           * @enum {string}
           */
          comment?: "none" | "create" | "update" | "full";
          /**
           * @description If the user can create items.
           * @enum {string}
           */
          create?: "none" | "full";
          /**
           * @description If the user can update items.
           * @enum {string}
           */
          delete?: "none" | "mine" | "role" | "full";
          /**
           * @description If the user is required to leave a comment explaining what was changed.
           * @enum {string}
           */
          explain?: "none" | "create" | "update" | "always";
          /**
           * @description If the user can read items.
           * @enum {string}
           */
          read?: "none" | "mine" | "role" | "full";
          /**
           * @description Unique identifier of the role this permission applies to.
           * @example 3
           */
          role?: number;
          /**
           * @description Explicitly denies read access for specific fields.
           * @example [
           *       "featured_image"
           *     ]
           */
          read_field_blacklist?: string[];
          /** @description What status this permission applies to. */
          status?: string;
          /** @description Explicitly denies specific statuses to be used. */
          status_blacklist?: string[];
          /**
           * @description If the user can update items.
           * @enum {string}
           */
          update?: "none" | "mine" | "role" | "full";
          /** @description Explicitly denies write access for specific fields. */
          write_field_blacklist?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Permissions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deletePermissions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updatePermissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          keys?: string[];
          data?: {
            /**
             * @description What collection this permission applies to.
             * @example customers
             */
            collection?: string;
            /**
             * @description If the user can post comments.
             * @enum {string}
             */
            comment?: "none" | "create" | "update" | "full";
            /**
             * @description If the user can create items.
             * @enum {string}
             */
            create?: "none" | "full";
            /**
             * @description If the user can update items.
             * @enum {string}
             */
            delete?: "none" | "mine" | "role" | "full";
            /**
             * @description If the user is required to leave a comment explaining what was changed.
             * @enum {string}
             */
            explain?: "none" | "create" | "update" | "always";
            /**
             * @description If the user can read items.
             * @enum {string}
             */
            read?: "none" | "mine" | "role" | "full";
            /**
             * @description Unique identifier of the role this permission applies to.
             * @example 3
             */
            role?: number;
            /**
             * @description Explicitly denies read access for specific fields.
             * @example [
             *       "featured_image"
             *     ]
             */
            read_field_blacklist?: string[];
            /** @description What status this permission applies to. */
            status?: string;
            /** @description Explicitly denies specific statuses to be used. */
            status_blacklist?: string[];
            /**
             * @description If the user can update items.
             * @enum {string}
             */
            update?: "none" | "mine" | "role" | "full";
            /** @description Explicitly denies write access for specific fields. */
            write_field_blacklist?: string[];
          };
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Permissions"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getMyPermissions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Permissions"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getPermission: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Permissions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deletePermission: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updatePermission: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description What collection this permission applies to. */
          collection?: Record<string, never>;
          /**
           * @description If the user can post comments. `full`.
           * @enum {string}
           */
          comment?: "none" | "create" | "update";
          /**
           * @description If the user can create items.
           * @enum {string}
           */
          create?: "none" | "full";
          /**
           * @description If the user can update items.
           * @enum {string}
           */
          delete?: "none" | "mine" | "role" | "full";
          /**
           * @description If the user is required to leave a comment explaining what was changed.
           * @enum {string}
           */
          explain?: "none" | "create" | "update" | "always";
          /**
           * @description If the user can read items.
           * @enum {string}
           */
          read?: "none" | "mine" | "role" | "full";
          /** @description Explicitly denies read access for specific fields. */
          read_field_blacklist?: Record<string, never>;
          /** @description Unique identifier of the role this permission applies to. */
          role?: Record<string, never>;
          /** @description What status this permission applies to. */
          status?: Record<string, never>;
          /** @description Explicitly denies specific statuses to be used. */
          status_blacklist?: Record<string, never>;
          /**
           * @description If the user can update items.
           * @enum {string}
           */
          update?: "none" | "mine" | "role" | "full";
          /** @description Explicitly denies write access for specific fields. */
          write_field_blacklist?: Record<string, never>;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Permissions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getFields: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Fields"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getCollectionFields: {
    parameters: {
      query?: {
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
      };
      header?: never;
      path: {
        /** @description Unique identifier of the collection the item resides in. */
        collection: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Fields"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createField: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier of the collection the item resides in. */
        collection: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Unique name of the field. Field name is unique within the collection.
           * @example id
           */
          field: string;
          /**
           * @description Directus specific data type. Used to cast values in the API.
           * @example integer
           */
          type: string;
          /** @description The schema info. */
          schema?: {
            /**
             * @description The name of the field.
             * @example title
             */
            name?: string;
            /**
             * @description The collection of the field.
             * @example posts
             */
            table?: string;
            /**
             * @description The type of the field.
             * @example string
             */
            type?: string;
            /**
             * @description The default value of the field.
             * @example null
             */
            default_value?: string | null;
            /**
             * @description The max length of the field.
             * @example null
             */
            max_length?: number | null;
            /**
             * @description If the field is nullable.
             * @example false
             */
            is_nullable?: boolean;
            /**
             * @description If the field is primary key.
             * @example false
             */
            is_primary_key?: boolean;
            /**
             * @description If the field has auto increment.
             * @example false
             */
            has_auto_increment?: boolean;
            /**
             * @description Related column from the foreign key constraint.
             * @example null
             */
            foreign_key_column?: string | null;
            /**
             * @description Related table from the foreign key constraint.
             * @example null
             */
            foreign_key_table?: string | null;
            /**
             * @description Comment as saved in the database.
             * @example null
             */
            comment?: string | null;
            /**
             * @description Database schema (pg only).
             * @example public
             */
            schema?: string;
            /**
             * @description Related schema from the foreign key constraint (pg only).
             * @example null
             */
            foreign_key_schema?: string | null;
          };
          /** @description The meta info. */
          meta?: {
            /**
             * @description Unique identifier for the field in the `directus_fields` collection.
             * @example 3
             */
            id?: number;
            /**
             * @description Unique name of the collection this field is in.
             * @example posts
             */
            collection?: string;
            /**
             * @description Unique name of the field. Field name is unique within the collection.
             * @example title
             */
            field?: string;
            /**
             * @description Transformation flag for field
             * @example null
             */
            special?: string[] | null;
            /**
             * @description What interface is used in the admin app to edit the value for this field.
             * @example primary-key
             */
            "system-interface"?: string | null;
            /**
             * @description Options for the interface that's used. This format is based on the individual interface.
             * @example null
             */
            options?: Record<string, never> | null;
            /**
             * @description What display is used in the admin app to display the value for this field.
             * @example null
             */
            display?: string | null;
            /**
             * @description Options for the display that's used. This format is based on the individual display.
             * @example null
             */
            display_options?: Record<string, never> | null;
            /**
             * @description If the field can be altered by the end user. Directus system fields have this value set to `true`.
             * @example true
             */
            locked?: boolean;
            /**
             * @description Prevents the user from editing the value in the field.
             * @example false
             */
            readonly?: boolean;
            /**
             * @description If this field should be hidden.
             * @example true
             */
            hidden?: boolean;
            /**
             * @description Sort order of this field on the edit page of the admin app.
             * @example 1
             */
            sort?: number | null;
            /**
             * @description Width of the field on the edit form.
             * @example null
             * @enum {string|null}
             */
            width?:
              | "half"
              | "half-left"
              | "half-right"
              | "full"
              | "fill"
              | null;
            /**
             * @description What field group this field is part of.
             * @example null
             */
            group?: number | null;
            /**
             * @description Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.
             * @example null
             */
            translation?: Record<string, never> | null;
            /**
             * @description A user provided note for the field. Will be rendered alongside the interface on the edit page.
             * @example
             */
            note?: string | null;
          } | null;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Fields"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getCollectionField: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier of the collection the item resides in. */
        collection: string;
        /** @description Unique identifier of the field. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Fields"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteField: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier of the collection the item resides in. */
        collection: string;
        /** @description Unique identifier of the field. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateField: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier of the collection the item resides in. */
        collection: string;
        /** @description Unique identifier of the field. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Unique name of the field. Field name is unique within the collection.
           * @example id
           */
          field?: string;
          /**
           * @description Directus specific data type. Used to cast values in the API.
           * @example integer
           */
          type?: string;
          /** @description The schema info. */
          schema?: {
            /**
             * @description The name of the field.
             * @example title
             */
            name?: string;
            /**
             * @description The collection of the field.
             * @example posts
             */
            table?: string;
            /**
             * @description The type of the field.
             * @example string
             */
            type?: string;
            /**
             * @description The default value of the field.
             * @example null
             */
            default_value?: string | null;
            /**
             * @description The max length of the field.
             * @example null
             */
            max_length?: number | null;
            /**
             * @description If the field is nullable.
             * @example false
             */
            is_nullable?: boolean;
            /**
             * @description If the field is primary key.
             * @example false
             */
            is_primary_key?: boolean;
            /**
             * @description If the field has auto increment.
             * @example false
             */
            has_auto_increment?: boolean;
            /**
             * @description Related column from the foreign key constraint.
             * @example null
             */
            foreign_key_column?: string | null;
            /**
             * @description Related table from the foreign key constraint.
             * @example null
             */
            foreign_key_table?: string | null;
            /**
             * @description Comment as saved in the database.
             * @example null
             */
            comment?: string | null;
            /**
             * @description Database schema (pg only).
             * @example public
             */
            schema?: string;
            /**
             * @description Related schema from the foreign key constraint (pg only).
             * @example null
             */
            foreign_key_schema?: string | null;
          };
          /** @description The meta info. */
          meta?: {
            /**
             * @description Unique identifier for the field in the `directus_fields` collection.
             * @example 3
             */
            id?: number;
            /**
             * @description Unique name of the collection this field is in.
             * @example posts
             */
            collection?: string;
            /**
             * @description Unique name of the field. Field name is unique within the collection.
             * @example title
             */
            field?: string;
            /**
             * @description Transformation flag for field
             * @example null
             */
            special?: string[] | null;
            /**
             * @description What interface is used in the admin app to edit the value for this field.
             * @example primary-key
             */
            "system-interface"?: string | null;
            /**
             * @description Options for the interface that's used. This format is based on the individual interface.
             * @example null
             */
            options?: Record<string, never> | null;
            /**
             * @description What display is used in the admin app to display the value for this field.
             * @example null
             */
            display?: string | null;
            /**
             * @description Options for the display that's used. This format is based on the individual display.
             * @example null
             */
            display_options?: Record<string, never> | null;
            /**
             * @description If the field can be altered by the end user. Directus system fields have this value set to `true`.
             * @example true
             */
            locked?: boolean;
            /**
             * @description Prevents the user from editing the value in the field.
             * @example false
             */
            readonly?: boolean;
            /**
             * @description If this field should be hidden.
             * @example true
             */
            hidden?: boolean;
            /**
             * @description Sort order of this field on the edit page of the admin app.
             * @example 1
             */
            sort?: number | null;
            /**
             * @description Width of the field on the edit form.
             * @example null
             * @enum {string|null}
             */
            width?:
              | "half"
              | "half-left"
              | "half-right"
              | "full"
              | "fill"
              | null;
            /**
             * @description What field group this field is part of.
             * @example null
             */
            group?: number | null;
            /**
             * @description Key value pair of `<language>: <translation>` that allows the user to change the displayed name of the field in the admin app.
             * @example null
             */
            translation?: Record<string, never> | null;
            /**
             * @description A user provided note for the field. Will be rendered alongside the interface on the edit page.
             * @example
             */
            note?: string | null;
          } | null;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Fields"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Files"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createFile: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Files"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteFiles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: {
            data?: string;
          };
          keys?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Files"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getFile: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Files"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteFile: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateFile: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "multipart/data": {
          /**
           * @description Title for the file. Is extracted from the filename on upload, but can be edited by the user.
           * @example User Avatar
           */
          title?: string;
          /** @description Preferred filename when file is downloaded. */
          filename_download?: string;
          /** @description Description for the file. */
          description?: string | null;
          /**
           * @description Virtual folder where this file resides in.
           * @example null
           */
          folder?: (string | components["schemas"]["Folders"]) | null;
          /** @description Tags for the file. Is automatically populated based on Exif data for images. */
          tags?: string[] | null;
          /**
           * Format: binary
           * @description File contents.
           */
          file: unknown;
        };
        "application/json": {
          /**
           * @description Title for the file. Is extracted from the filename on upload, but can be edited by the user.
           * @example User Avatar
           */
          title?: string;
          /** @description Preferred filename when file is downloaded. */
          filename_download?: string;
          /** @description Description for the file. */
          description?: string | null;
          /**
           * @description Virtual folder where this file resides in.
           * @example null
           */
          folder?: (string | components["schemas"]["Folders"]) | null;
          /** @description Tags for the file. Is automatically populated based on Exif data for images. */
          tags?: string[] | null;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Files"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getCollections: {
    parameters: {
      query?: {
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Collections"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createCollection: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Unique name of the collection.
           * @example my_collection
           */
          collection: string;
          /** @description The fields contained in this collection. See the fields reference for more information. Each individual field requires field, type, and interface to be provided. */
          fields: Record<string, never>[];
          /**
           * @description Name of a Google Material Design Icon that's assigned to this collection.
           * @example people
           */
          icon?: string | null;
          /**
           * @description A note describing the collection.
           * @example null
           */
          note?: string | null;
          /**
           * @description Text representation of how items from this collection are shown across the system.
           * @example null
           */
          display_template?: string | null;
          /**
           * @description Whether or not the collection is hidden from the navigation in the admin app.
           * @example false
           */
          hidden?: boolean;
          /**
           * @description Whether or not the collection is treated as a single object.
           * @example false
           */
          singleton?: boolean;
          /**
           * @description Key value pairs of how to show this collection's name in different languages in the admin app.
           * @example null
           */
          translation?: string | null;
          /**
           * @description Whether or not Content Versioning is enabled for this collection.
           * @example false
           */
          versioning?: boolean;
          /**
           * @description What field holds the archive value.
           * @example null
           */
          archive_field?: string | null;
          /**
           * @description What value to use for "archived" items.
           * @example null
           */
          archive_app_filter?: string | null;
          /**
           * @description What value to use to "unarchive" items.
           * @example null
           */
          archive_value?: string | null;
          /**
           * @description Whether or not to show the "archived" filter.
           * @example null
           */
          unarchive_value?: string | null;
          /**
           * @description The sort field in the collection.
           * @example null
           */
          sort_field?: string | null;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Collections"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getCollection: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Collections"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteCollection: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateCollection: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier of the collection. */
        id: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Metadata of the collection. */
          meta?: {
            /**
             * @description Name of a Google Material Design Icon that's assigned to this collection.
             * @example people
             */
            icon?: string | null;
            /**
             * @description Choose the color for the icon assigned to this collection.
             * @example #6644ff
             */
            color?: string | null;
            /**
             * @description A note describing the collection.
             * @example null
             */
            note?: string | null;
            /**
             * @description Text representation of how items from this collection are shown across the system.
             * @example null
             */
            display_template?: string | null;
            /**
             * @description Whether or not the collection is hidden from the navigation in the admin app.
             * @example false
             */
            hidden?: boolean;
            /**
             * @description Whether or not the collection is treated as a single object.
             * @example false
             */
            singleton?: boolean;
            /**
             * @description Key value pairs of how to show this collection's name in different languages in the admin app.
             * @example null
             */
            translation?: string | null;
            /**
             * @description Whether or not Content Versioning is enabled for this collection.
             * @example false
             */
            versioning?: boolean;
            /**
             * @description What field holds the archive value.
             * @example null
             */
            archive_field?: string | null;
            /**
             * @description What value to use for "archived" items.
             * @example null
             */
            archive_app_filter?: string | null;
            /**
             * @description What value to use to "unarchive" items.
             * @example null
             */
            archive_value?: string | null;
            /**
             * @description Whether or not to show the "archived" filter.
             * @example null
             */
            unarchive_value?: string | null;
            /**
             * @description The sort field in the collection.
             * @example null
             */
            sort_field?: string | null;
          };
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Collections"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getFolders: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Folders"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createFolder: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Name of the folder.
           * @example Amsterdam
           */
          name: string;
          /** @description Unique identifier of the parent folder. This allows for nested folders. */
          parent?: number;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Folders"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteFolders: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateFolders: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: {
            /**
             * @description Name of the folder.
             * @example Amsterdam
             */
            name: string;
            /** @description Unique identifier of the parent folder. This allows for nested folders. */
            parent?: number;
          };
          keys?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Folders"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getFolder: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Folders"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteFolder: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateFolder: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Name of the folder. Can't be null or empty. */
          name?: string;
          /**
           * @description Unique identifier of the parent folder. This allows for nested folders.
           * @example 3
           */
          parent?: number;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Folders"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getUsers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createUser: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Users"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteUsers: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateUsers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: components["schemas"]["Users"];
          keys?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getUser: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteUser: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateUser: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Users"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: Record<string, never>;
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  invite: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Email address or array of email addresses of the to-be-invited user(s). */
          email?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  acceptInvite: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": {
          /**
           * @description Accept invite token.
           * @example eyJh...KmUk
           */
          token?: string;
          /**
           * Format: password
           * @description Password of the user.
           * @example d1r3ctu5
           */
          password?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getMe: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateMe: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Users"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateLastUsedPageMe: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Path of the page you used last. */
          last_page?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  meTfaEnable: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  meTfaDisable: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getRoles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        page?: components["parameters"]["Page"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Roles"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createRole: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Description of the role. */
          description?: string;
          /** @description Whether or not this role enforces the use of 2FA. */
          enforce_tfa?: boolean;
          /** @description ID used with external services in SCIM. */
          external_id?: string;
          /** @description Array of IP addresses that are allowed to connect to the API as a user of this role. */
          ip_access?: string[];
          /** @description Custom override for the admin app module bar navigation. */
          module_listing?: string;
          /**
           * @description Name of the role.
           * @example Interns
           */
          name?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Roles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteRoles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateRoles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          keys?: string[];
          data?: {
            /** @description Description of the role. */
            description?: string;
            /** @description Whether or not this role enforces the use of 2FA. */
            enforce_tfa?: boolean;
            /** @description ID used with external services in SCIM. */
            external_id?: string;
            /** @description Array of IP addresses that are allowed to connect to the API as a user of this role. */
            ip_access?: string[];
            /** @description Custom override for the admin app module bar navigation. */
            module_listing?: string;
            /**
             * @description Name of the role.
             * @example Interns
             */
            name?: string;
          };
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Roles"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getRole: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Roles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteRole: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateRole: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Description of the role. */
          description?: string;
          /** @description Whether or not this role enforces the use of 2FA. */
          enforce_tfa?: boolean;
          /** @description ID used with external services in SCIM. */
          external_id?: string;
          /** @description Array of IP addresses that are allowed to connect to the API as a user of this role. */
          ip_access?: string[];
          /** @description Custom override for the admin app module bar navigation. */
          module_listing?: string;
          /** @description Name of the role. */
          name?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Roles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getPresets: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        page?: components["parameters"]["Page"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Presets"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createPreset: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description What collection this collection preset is used for.
           * @example articles
           */
          collection: string;
          /**
           * @description Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.
           * @example Highly rated articles
           */
          title?: string;
          /**
           * @description The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.
           * @example null
           */
          role?: string;
          /** @description What the user searched for in search/filter in the header bar. */
          search?: string;
          filters?: {
            /** @example aHKLAakdVghzD */
            key?: string;
            /** @example rating */
            field?: string;
            /** @example gte */
            operator?: string;
            /** @example 4.5 */
            value?: number;
          }[];
          /** @description Name of the view type that is used. */
          layout?: string;
          /** @description Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters. */
          layout_query?: string;
          /** @description Options of the views. The properties in here are controlled by the layout. */
          layout_options?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Presets"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deletePresets: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updatePresets: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          keys?: string[];
          data?: {
            /**
             * @description What collection this collection preset is used for.
             * @example articles
             */
            collection: string;
            /**
             * @description Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.
             * @example Highly rated articles
             */
            title?: string;
            /**
             * @description The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role.
             * @example null
             */
            role?: string;
            /** @description What the user searched for in search/filter in the header bar. */
            search?: string;
            filters?: {
              /** @example aHKLAakdVghzD */
              key?: string;
              /** @example rating */
              field?: string;
              /** @example gte */
              operator?: string;
              /** @example 4.5 */
              value?: number;
            }[];
            /** @description Name of the view type that is used. */
            layout?: string;
            /** @description Layout query that's saved per layout type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters. */
            layout_query?: string;
            /** @description Options of the views. The properties in here are controlled by the layout. */
            layout_options?: string;
          };
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Presets"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getPreset: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Presets"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deletePreset: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updatePreset: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description What collection this collection preset is used for.
           * @example articles
           */
          collection: string;
          /**
           * @description Name for the bookmark. If this is set, the collection preset will be considered to be a bookmark.
           * @example Highly rated articles
           */
          title?: string;
          /** @description The unique identifier of a role in the platform. If user is null, this will be used to apply the collection preset or bookmark for all users in the role. */
          role?: number;
          /** @description What the user searched for in search/filter in the header bar. */
          search_query?: string;
          filters?: {
            /** @example rating */
            field?: string;
            /** @example gte */
            operator?: string;
            /** @example 4.5 */
            value?: number;
          }[];
          /** @description Name of the view type that is used. Defaults to tabular. */
          view_type?: string;
          /** @description View query that's saved per view type. Controls what data is fetched on load. These follow the same format as the JS SDK parameters. */
          view_query?: string;
          /** @description Options of the views. The properties in here are controlled by the layout. */
          view_options?: string;
          /** @description Key value pair of language-translation. Can be used to translate the bookmark title in multiple languages. */
          translation?: Record<string, never>;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Presets"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getRelations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        page?: components["parameters"]["Page"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Relations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createRelation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Collection that has the field that holds the foreign key.
           * @example articles
           */
          collection_many?: string;
          /**
           * @description Collection on the _one_ side of the relationship.
           * @example authors
           */
          collection_one?: string;
          /**
           * @description Foreign key. Field that holds the primary key of the related collection.
           * @example author
           */
          field_many?: string;
          /**
           * @description Alias column that serves as the _one_ side of the relationship.
           * @example books
           */
          field_one?: string;
          /** @description Field on the junction table that holds the primary key of the related collection. */
          junction_field?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Relations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getRelation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Relations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteRelation: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateRelation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Collection that has the field that holds the foreign key. */
          collection_many?: string;
          /** @description Collection on the _one_ side of the relationship. */
          collection_one?: string;
          /** @description Foreign key. Field that holds the primary key of the related collection. */
          field_many?: string;
          /**
           * @description Alias column that serves as the _one_ side of the relationship.
           * @example books
           */
          field_one?: string;
          /** @description Field on the junction table that holds the primary key of the related collection. */
          junction_field?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Relations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getRevisions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        page?: components["parameters"]["Page"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Revisions"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getRevision: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index */
        id: components["parameters"]["Id"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Revisions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getFlows: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Flows"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createFlow: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Flows"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Flows"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteFlows: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateFlows: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: components["schemas"]["Flows"];
          keys?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Flows"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getFlow: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Flows"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteFlow: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateFlow: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Flows"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Flows"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getOperations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Operations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createOperation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Operations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Operations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteOperations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateOperations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: components["schemas"]["Operations"];
          keys?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Operations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getOperation: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Operations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteOperation: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateOperation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Operations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Operations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getWebhooks: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Webhooks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createWebhook: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description The name of the webhook.
           * @example create articles
           */
          name?: string;
          /**
           * @description Method used in the webhook.
           * @example POST
           */
          method?: string;
          /**
           * @description The url of the webhook.
           * @example null
           */
          url?: string;
          /**
           * @description The status of the webhook.
           * @example active
           */
          status?: string;
          /**
           * @description If yes, send the content of what was done
           * @example true
           */
          data?: boolean;
          /**
           * @description The actions that triggers this webhook.
           * @example null
           */
          actions?: unknown;
          /**
           * @description The collections that triggers this webhook.
           * @example null
           */
          "system-collections"?: unknown;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Roles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteWebhooks: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateWebhooks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: {
            /**
             * @description The name of the webhook.
             * @example create articles
             */
            name?: string;
            /**
             * @description Method used in the webhook.
             * @example POST
             */
            method?: string;
            /**
             * @description The url of the webhook.
             * @example null
             */
            url?: string;
            /**
             * @description The status of the webhook.
             * @example active
             */
            status?: string;
            /**
             * @description If yes, send the content of what was done
             * @example true
             */
            data?: boolean;
            /**
             * @description The actions that triggers this webhook.
             * @example null
             */
            actions?: unknown;
            /**
             * @description The collections that triggers this webhook.
             * @example null
             */
            "system-collections"?: unknown;
          };
          keys?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Webhooks"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getWebhook: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Webhooks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteWebhook: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateWebhook: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description The name of the webhook.
           * @example create articles
           */
          name?: string;
          /**
           * @description Method used in the webhook.
           * @example POST
           */
          method?: string;
          /**
           * @description The url of the webhook.
           * @example null
           */
          url?: string;
          /**
           * @description The status of the webhook.
           * @example active
           */
          status?: string;
          /**
           * @description If yes, send the content of what was done
           * @example true
           */
          data?: boolean;
          /**
           * @description The actions that triggers this webhook.
           * @example null
           */
          actions?: unknown;
          /**
           * @description The collections that triggers this webhook.
           * @example null
           */
          "system-collections"?: unknown;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Roles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  listExtensions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Extensions"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateExtensions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        name: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Directus metadata for the extension. Where the configuration for the extension in the current project is stored. */
          meta?: {
            /**
             * @description Whether or not the extension is enabled.
             * @example true
             */
            enabled?: boolean;
          };
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Extensions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateExtensionBundle: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        bundle: string;
        name: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Directus metadata for the extension. Where the configuration for the extension in the current project is stored. */
          meta?: {
            /**
             * @description Whether or not the extension is enabled.
             * @example true
             */
            enabled?: boolean;
          };
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Extensions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getContentVersions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Versions"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  createContentVersion: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Versions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Versions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteContentVersions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateContentVersions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          data?: components["schemas"]["Versions"];
          keys?: string[];
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Versions"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getContentVersion: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Versions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteContentVersion: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateContentVersion: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["Versions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Versions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  saveContentVersion: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": Record<string, never>;
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>;
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  compareContentVersion: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: Record<string, never>;
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  promoteContentVersion: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unique identifier for the object. */
        id: components["parameters"]["UUId"];
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /** @description Hash of the main version of the item to be promoted. */
          mainHash?: string;
          /** @description Optional array of field names of which the values are to be promoted. */
          fields?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": Record<string, never>;
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getComments: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        page?: components["parameters"]["Page"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Comments"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createComment: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Which collection this collection comment is for.
           * @example projects
           */
          collection: string;
          /** @example 81dfa7e0-56d2-471f-b96a-1cf8a62bdf28 */
          item: string;
          /** @example A new comment */
          comment: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Comments"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteComments: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateComments: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          keys?: string[];
          data?: {
            /**
             * @description Which collection this collection comment is for.
             * @example projects
             */
            collection: string;
            /** @example 81dfa7e0-56d2-471f-b96a-1cf8a62bdf28 */
            item?: string;
            /** @example A new comment */
            comment?: string;
          };
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Comments"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  getComment: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Comments"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteComment: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateComment: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": {
          /**
           * @description Which collection this comment is for.
           * @example projects
           */
          collection: string;
          /** @example 81dfa7e0-56d2-471f-b96a-1cf8a62bdf28 */
          item?: string;
          /** @example An updated comment */
          comment?: string;
        };
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Comments"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  getSettings: {
    parameters: {
      query?: {
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Cursor for use in pagination. Often used in combination with limit. */
        page?: components["parameters"]["Page"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Settings"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSetting: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": Record<string, never>;
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["Settings"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsDirectusSyncIDMap: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsDirectusSyncIDMap"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsDirectusSyncIDMap: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsDirectusSyncIDMap"][]
          | components["schemas"]["ItemsDirectusSyncIDMap"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsDirectusSyncIDMap"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsDirectusSyncIDMap: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsDirectusSyncIDMap: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsDirectusSyncIDMap"][]
          | components["schemas"]["ItemsDirectusSyncIDMap"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsDirectusSyncIDMap"][];
          };
        };
      };
    };
  };
  readSingleItemsDirectusSyncIDMap: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsDirectusSyncIDMap"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsDirectusSyncIDMap: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsDirectusSyncIDMap: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsDirectusSyncIDMap"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsDirectusSyncIDMap"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarSocialLinks"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarSocialLinks: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarSocialLinks"][]
          | components["schemas"]["ItemsGameStarSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarSocialLinks"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarSocialLinks"][]
          | components["schemas"]["ItemsGameStarSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarSocialLinks"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsEvents"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsEvents: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsEvents"][]
          | components["schemas"]["ItemsEvents"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsEvents"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsEvents: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsEvents"][]
          | components["schemas"]["ItemsEvents"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsEvents"][];
          };
        };
      };
    };
  };
  readSingleItemsEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsEvents"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsEvents: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsEvents"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsEvents"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsMembers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsMembers"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsMembers: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsMembers"][]
          | components["schemas"]["ItemsMembers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsMembers"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsMembers: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsMembers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsMembers"][]
          | components["schemas"]["ItemsMembers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsMembers"][];
          };
        };
      };
    };
  };
  readSingleItemsMembers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsMembers"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsMembers: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsMembers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsMembers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsMembers"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsCommissionMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMemberships"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsCommissionMemberships: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionMemberships"][]
          | components["schemas"]["ItemsCommissionMemberships"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMemberships"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsCommissionMemberships: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsCommissionMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionMemberships"][]
          | components["schemas"]["ItemsCommissionMemberships"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMemberships"][];
          };
        };
      };
    };
  };
  readSingleItemsCommissionMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMemberships"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsCommissionMemberships: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsCommissionMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsCommissionMemberships"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMemberships"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissions"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsCommissions: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissions"][]
          | components["schemas"]["ItemsCommissions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissions"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsCommissions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissions"][]
          | components["schemas"]["ItemsCommissions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissions"][];
          };
        };
      };
    };
  };
  readSingleItemsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsCommissions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsCommissions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsLanguages: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsLanguages"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsLanguages: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsLanguages"][]
          | components["schemas"]["ItemsLanguages"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsLanguages"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsLanguages: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsLanguages: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsLanguages"][]
          | components["schemas"]["ItemsLanguages"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsLanguages"][];
          };
        };
      };
    };
  };
  readSingleItemsLanguages: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsLanguages"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsLanguages: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsLanguages: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsLanguages"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsLanguages"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarArticlesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticlesTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarArticlesTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarArticlesTranslations"][]
          | components["schemas"]["ItemsGameStarArticlesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticlesTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarArticlesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarArticlesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarArticlesTranslations"][]
          | components["schemas"]["ItemsGameStarArticlesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticlesTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarArticlesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticlesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarArticlesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarArticlesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarArticlesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticlesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarArticles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticles"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarArticles: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarArticles"][]
          | components["schemas"]["ItemsGameStarArticles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticles"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarArticles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarArticles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarArticles"][]
          | components["schemas"]["ItemsGameStarArticles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticles"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarArticles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarArticles: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarArticles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarArticles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarArticles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsNewsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsNewsTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNewsTranslations"][]
          | components["schemas"]["ItemsNewsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsNewsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsNewsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNewsTranslations"][]
          | components["schemas"]["ItemsNewsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsNewsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsNewsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsNewsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsNewsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsNews: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNews"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsNews: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNews"][]
          | components["schemas"]["ItemsNews"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNews"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsNews: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsNews: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNews"][]
          | components["schemas"]["ItemsNews"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNews"][];
          };
        };
      };
    };
  };
  readSingleItemsNews: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNews"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsNews: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsNews: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsNews"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNews"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarProjectsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjectsTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarProjectsTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarProjectsTranslations"][]
          | components["schemas"]["ItemsGameStarProjectsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjectsTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarProjectsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarProjectsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarProjectsTranslations"][]
          | components["schemas"]["ItemsGameStarProjectsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjectsTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarProjectsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjectsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarProjectsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarProjectsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarProjectsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjectsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarProjects: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjects"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarProjects: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarProjects"][]
          | components["schemas"]["ItemsGameStarProjects"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjects"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarProjects: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarProjects: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarProjects"][]
          | components["schemas"]["ItemsGameStarProjects"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjects"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarProjects: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjects"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarProjects: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarProjects: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarProjects"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarProjects"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsStdCellTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCellTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsStdCellTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsStdCellTranslations"][]
          | components["schemas"]["ItemsStdCellTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCellTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsStdCellTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsStdCellTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsStdCellTranslations"][]
          | components["schemas"]["ItemsStdCellTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCellTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsStdCellTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCellTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsStdCellTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsStdCellTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsStdCellTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCellTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsStdCell: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCell"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsStdCell: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsStdCell"][]
          | components["schemas"]["ItemsStdCell"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCell"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsStdCell: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsStdCell: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsStdCell"][]
          | components["schemas"]["ItemsStdCell"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCell"][];
          };
        };
      };
    };
  };
  readSingleItemsStdCell: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCell"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsStdCell: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsStdCell: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsStdCell"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsStdCell"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartners"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsPartners: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsPartners"][]
          | components["schemas"]["ItemsPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartners"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsPartners: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsPartners"][]
          | components["schemas"]["ItemsPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartners"][];
          };
        };
      };
    };
  };
  readSingleItemsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartners"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsPartners: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartners"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPartners"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationPartners: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPartners"][]
          | components["schemas"]["ItemsAssociationPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPartners"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationPartners: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPartners"][]
          | components["schemas"]["ItemsAssociationPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPartners"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPartners"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationPartners: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPartners"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociation"];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociation: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociation"][]
          | components["schemas"]["ItemsAssociation"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociation"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociation: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociation"][]
          | components["schemas"]["ItemsAssociation"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociation"];
          };
        };
      };
    };
  };
  readSingleItemsAssociation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociation"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociation: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociation: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociation"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociation"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGalleries: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGalleries"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGalleries: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGalleries"][]
          | components["schemas"]["ItemsGalleries"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGalleries"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGalleries: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGalleries: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGalleries"][]
          | components["schemas"]["ItemsGalleries"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGalleries"][];
          };
        };
      };
    };
  };
  readSingleItemsGalleries: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGalleries"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGalleries: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGalleries: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGalleries"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGalleries"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarEventsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEventsTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarEventsTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarEventsTranslations"][]
          | components["schemas"]["ItemsGameStarEventsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEventsTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarEventsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarEventsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarEventsTranslations"][]
          | components["schemas"]["ItemsGameStarEventsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEventsTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarEventsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEventsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarEventsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarEventsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarEventsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEventsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEvents"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarEvents: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarEvents"][]
          | components["schemas"]["ItemsGameStarEvents"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEvents"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarEvents: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarEvents"][]
          | components["schemas"]["ItemsGameStarEvents"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEvents"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEvents"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarEvents: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarEvents: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarEvents"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarEvents"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsCommissionsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsSocialLinks"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsCommissionsSocialLinks: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionsSocialLinks"][]
          | components["schemas"]["ItemsCommissionsSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsSocialLinks"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsCommissionsSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsCommissionsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionsSocialLinks"][]
          | components["schemas"]["ItemsCommissionsSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsSocialLinks"][];
          };
        };
      };
    };
  };
  readSingleItemsCommissionsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsCommissionsSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsCommissionsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsCommissionsSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSocialLinks"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsSocialLinks: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSocialLinks"][]
          | components["schemas"]["ItemsSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSocialLinks"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSocialLinks"][]
          | components["schemas"]["ItemsSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSocialLinks"][];
          };
        };
      };
    };
  };
  readSingleItemsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsSubsonic: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonic"];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsSubsonic: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSubsonic"][]
          | components["schemas"]["ItemsSubsonic"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonic"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsSubsonic: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsSubsonic: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSubsonic"][]
          | components["schemas"]["ItemsSubsonic"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonic"];
          };
        };
      };
    };
  };
  readSingleItemsSubsonic: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonic"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsSubsonic: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsSubsonic: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsSubsonic"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonic"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdTranslations"][]
          | components["schemas"]["ItemsIcbdTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdTranslations"][]
          | components["schemas"]["ItemsIcbdTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbd: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbd"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbd: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbd"][]
          | components["schemas"]["ItemsIcbd"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbd"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbd: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbd: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbd"][]
          | components["schemas"]["ItemsIcbd"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbd"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbd: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbd"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbd: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbd: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbd"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbd"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsSavetheDateTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDateTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsSavetheDateTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSavetheDateTranslations"][]
          | components["schemas"]["ItemsSavetheDateTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDateTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsSavetheDateTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsSavetheDateTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSavetheDateTranslations"][]
          | components["schemas"]["ItemsSavetheDateTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDateTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsSavetheDateTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDateTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsSavetheDateTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsSavetheDateTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsSavetheDateTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDateTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsSavetheDate: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDate"];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsSavetheDate: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSavetheDate"][]
          | components["schemas"]["ItemsSavetheDate"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDate"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsSavetheDate: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsSavetheDate: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSavetheDate"][]
          | components["schemas"]["ItemsSavetheDate"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDate"];
          };
        };
      };
    };
  };
  readSingleItemsSavetheDate: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDate"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsSavetheDate: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsSavetheDate: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsSavetheDate"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSavetheDate"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationPublicFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFiles"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationPublicFiles: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPublicFiles"][]
          | components["schemas"]["ItemsAssociationPublicFiles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFiles"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationPublicFiles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationPublicFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPublicFiles"][]
          | components["schemas"]["ItemsAssociationPublicFiles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFiles"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationPublicFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFiles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationPublicFiles: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationPublicFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationPublicFiles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFiles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdFiles"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdFiles: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdFiles"][]
          | components["schemas"]["ItemsIcbdFiles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdFiles"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdFiles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdFiles"][]
          | components["schemas"]["ItemsIcbdFiles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdFiles"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdFiles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdFiles: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdFiles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdFiles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdFiles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdActivities: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivities"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdActivities: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivities"][]
          | components["schemas"]["ItemsIcbdActivities"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivities"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdActivities: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdActivities: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivities"][]
          | components["schemas"]["ItemsIcbdActivities"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivities"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdActivities: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivities"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdActivities: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdActivities: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdActivities"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivities"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationTranslations"][]
          | components["schemas"]["ItemsAssociationTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationTranslations"][]
          | components["schemas"]["ItemsAssociationTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdSpeakers"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdSpeakers"][]
          | components["schemas"]["ItemsIcbdSpeakers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdSpeakers"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdSpeakers: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdSpeakers"][]
          | components["schemas"]["ItemsIcbdSpeakers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdSpeakers"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdSpeakers"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdSpeakers: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdSpeakers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdSpeakers"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsRegistrations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsRegistrations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsRegistrations"][]
          | components["schemas"]["ItemsRegistrations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsRegistrations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsRegistrations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsRegistrations"][]
          | components["schemas"]["ItemsRegistrations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsRegistrations"][];
          };
        };
      };
    };
  };
  readSingleItemsRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsRegistrations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsRegistrations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsRegistrations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsRegistrations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsArtists: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsArtists"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsArtists: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsArtists"][]
          | components["schemas"]["ItemsArtists"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsArtists"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsArtists: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsArtists: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsArtists"][]
          | components["schemas"]["ItemsArtists"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsArtists"][];
          };
        };
      };
    };
  };
  readSingleItemsArtists: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsArtists"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsArtists: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsArtists: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsArtists"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsArtists"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsSubsonicTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonicTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsSubsonicTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSubsonicTranslations"][]
          | components["schemas"]["ItemsSubsonicTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonicTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsSubsonicTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsSubsonicTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsSubsonicTranslations"][]
          | components["schemas"]["ItemsSubsonicTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonicTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsSubsonicTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonicTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsSubsonicTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsSubsonicTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsSubsonicTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsSubsonicTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdActivitiesRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesRegistrations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdActivitiesRegistrations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivitiesRegistrations"][]
          | components["schemas"]["ItemsIcbdActivitiesRegistrations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesRegistrations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdActivitiesRegistrations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdActivitiesRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivitiesRegistrations"][]
          | components["schemas"]["ItemsIcbdActivitiesRegistrations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesRegistrations"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdActivitiesRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesRegistrations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdActivitiesRegistrations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdActivitiesRegistrations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdActivitiesRegistrations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesRegistrations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationSocialLinks"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationSocialLinks: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationSocialLinks"][]
          | components["schemas"]["ItemsAssociationSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationSocialLinks"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationSocialLinks"][]
          | components["schemas"]["ItemsAssociationSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationSocialLinks"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationSocialLinks: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationSocialLinks: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationSocialLinks"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationSocialLinks"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationPolesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPolesTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationPolesTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPolesTranslations"][]
          | components["schemas"]["ItemsAssociationPolesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPolesTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationPolesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationPolesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPolesTranslations"][]
          | components["schemas"]["ItemsAssociationPolesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPolesTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationPolesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPolesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationPolesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationPolesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationPolesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPolesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationPoles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPoles"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationPoles: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPoles"][]
          | components["schemas"]["ItemsAssociationPoles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPoles"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationPoles: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationPoles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPoles"][]
          | components["schemas"]["ItemsAssociationPoles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPoles"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationPoles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPoles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationPoles: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationPoles: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationPoles"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPoles"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsNewsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsPartners"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsNewsPartners: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNewsPartners"][]
          | components["schemas"]["ItemsNewsPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsPartners"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsNewsPartners: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsNewsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNewsPartners"][]
          | components["schemas"]["ItemsNewsPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsPartners"][];
          };
        };
      };
    };
  };
  readSingleItemsNewsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsPartners"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsNewsPartners: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsNewsPartners: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsNewsPartners"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsPartners"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStarTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStarTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarTranslations"][]
          | components["schemas"]["ItemsGameStarTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStarTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStarTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStarTranslations"][]
          | components["schemas"]["ItemsGameStarTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsGameStarTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStarTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStarTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStarTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStarTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsGameStar: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStar"];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsGameStar: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStar"][]
          | components["schemas"]["ItemsGameStar"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStar"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsGameStar: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsGameStar: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsGameStar"][]
          | components["schemas"]["ItemsGameStar"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStar"];
          };
        };
      };
    };
  };
  readSingleItemsGameStar: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStar"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsGameStar: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsGameStar: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsGameStar"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsGameStar"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMembershipsTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationMembershipsTranslations"][]
          | components["schemas"]["ItemsAssociationMembershipsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMembershipsTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationMembershipsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationMembershipsTranslations"][]
          | components["schemas"]["ItemsAssociationMembershipsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMembershipsTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMembershipsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationMembershipsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationMembershipsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMembershipsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMemberships"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationMemberships: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationMemberships"][]
          | components["schemas"]["ItemsAssociationMemberships"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMemberships"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationMemberships: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationMemberships"][]
          | components["schemas"]["ItemsAssociationMemberships"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMemberships"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMemberships"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationMemberships: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationMemberships: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationMemberships"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationMemberships"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdPhds: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdPhds"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdPhds: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdPhds"][]
          | components["schemas"]["ItemsIcbdPhds"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdPhds"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdPhds: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdPhds: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdPhds"][]
          | components["schemas"]["ItemsIcbdPhds"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdPhds"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdPhds: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdPhds"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdPhds: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdPhds: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdPhds"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdPhds"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsPartnerCategoryTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategoryTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsPartnerCategoryTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsPartnerCategoryTranslations"][]
          | components["schemas"]["ItemsPartnerCategoryTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategoryTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsPartnerCategoryTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsPartnerCategoryTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsPartnerCategoryTranslations"][]
          | components["schemas"]["ItemsPartnerCategoryTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategoryTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsPartnerCategoryTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategoryTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsPartnerCategoryTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsPartnerCategoryTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsPartnerCategoryTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategoryTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsPartnerCategory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategory"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsPartnerCategory: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsPartnerCategory"][]
          | components["schemas"]["ItemsPartnerCategory"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategory"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsPartnerCategory: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsPartnerCategory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsPartnerCategory"][]
          | components["schemas"]["ItemsPartnerCategory"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategory"][];
          };
        };
      };
    };
  };
  readSingleItemsPartnerCategory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategory"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsPartnerCategory: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsPartnerCategory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsPartnerCategory"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsPartnerCategory"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsInventory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsInventory"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsInventory: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsInventory"][]
          | components["schemas"]["ItemsInventory"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsInventory"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsInventory: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsInventory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsInventory"][]
          | components["schemas"]["ItemsInventory"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsInventory"][];
          };
        };
      };
    };
  };
  readSingleItemsInventory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsInventory"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsInventory: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsInventory: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsInventory"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsInventory"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsCommissionsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsCommissionsTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionsTranslations"][]
          | components["schemas"]["ItemsCommissionsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsCommissionsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsCommissionsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionsTranslations"][]
          | components["schemas"]["ItemsCommissionsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsCommissionsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsCommissionsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsCommissionsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsCommissionsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdActivitiesIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdActivitiesIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"][]
          | components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdActivitiesIcbdSpeakers: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdActivitiesIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"][]
          | components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdActivitiesIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdActivitiesIcbdSpeakers: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdActivitiesIcbdSpeakers: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsAssociationPublicFilesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFilesTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsAssociationPublicFilesTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPublicFilesTranslations"][]
          | components["schemas"]["ItemsAssociationPublicFilesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFilesTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsAssociationPublicFilesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsAssociationPublicFilesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsAssociationPublicFilesTranslations"][]
          | components["schemas"]["ItemsAssociationPublicFilesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFilesTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsAssociationPublicFilesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFilesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsAssociationPublicFilesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsAssociationPublicFilesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsAssociationPublicFilesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsAssociationPublicFilesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsCommissionMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMembershipsTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsCommissionMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionMembershipsTranslations"][]
          | components["schemas"]["ItemsCommissionMembershipsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMembershipsTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsCommissionMembershipsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsCommissionMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsCommissionMembershipsTranslations"][]
          | components["schemas"]["ItemsCommissionMembershipsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMembershipsTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsCommissionMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMembershipsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsCommissionMembershipsTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsCommissionMembershipsTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsCommissionMembershipsTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsCommissionMembershipsTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsNewsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsCommissions"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsNewsCommissions: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNewsCommissions"][]
          | components["schemas"]["ItemsNewsCommissions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsCommissions"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsNewsCommissions: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsNewsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsNewsCommissions"][]
          | components["schemas"]["ItemsNewsCommissions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsCommissions"][];
          };
        };
      };
    };
  };
  readSingleItemsNewsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsCommissions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsNewsCommissions: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsNewsCommissions: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsNewsCommissions"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsNewsCommissions"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  readItemsIcbdActivitiesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesTranslations"][];
            meta?: components["schemas"]["x-metadata"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  createItemsIcbdActivitiesTranslations: {
    parameters: {
      query?: {
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivitiesTranslations"][]
          | components["schemas"]["ItemsIcbdActivitiesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesTranslations"][];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  deleteItemsIcbdActivitiesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
    };
  };
  updateItemsIcbdActivitiesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description A limit on the number of objects that are returned. */
        limit?: components["parameters"]["Limit"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description How many items to skip when fetching data. */
        offset?: components["parameters"]["Offset"];
        /** @description How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
        sort?: components["parameters"]["Sort"];
        /** @description Select items in collection by given conditions. */
        filter?: components["parameters"]["Filter"];
        /** @description Filter by items that contain the given search query in one of their fields. */
        search?: components["parameters"]["Search"];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json":
          | components["schemas"]["ItemsIcbdActivitiesTranslations"][]
          | components["schemas"]["ItemsIcbdActivitiesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesTranslations"][];
          };
        };
      };
    };
  };
  readSingleItemsIcbdActivitiesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
        /** @description Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
        version?: components["parameters"]["Version"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  deleteSingleItemsIcbdActivitiesTranslations: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
  updateSingleItemsIcbdActivitiesTranslations: {
    parameters: {
      query?: {
        /** @description Control what fields are being returned in the object. */
        fields?: components["parameters"]["Fields"];
        /** @description What metadata to return in the response. */
        meta?: components["parameters"]["Meta"];
      };
      header?: never;
      path: {
        /** @description Index of the item. */
        id: number | string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["ItemsIcbdActivitiesTranslations"];
      };
    };
    responses: {
      /** @description Successful request */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            data?: components["schemas"]["ItemsIcbdActivitiesTranslations"];
          };
        };
      };
      401: components["responses"]["UnauthorizedError"];
      404: components["responses"]["NotFoundError"];
    };
  };
}

export type Schema = {
  artists: components["schemas"]["ItemsArtists"][];
  association: components["schemas"]["ItemsAssociation"];
  association_memberships: components["schemas"]["ItemsAssociationMemberships"][];
  association_memberships_translations: components["schemas"]["ItemsAssociationMembershipsTranslations"][];
  association_partners: components["schemas"]["ItemsAssociationPartners"][];
  association_poles: components["schemas"]["ItemsAssociationPoles"][];
  association_poles_translations: components["schemas"]["ItemsAssociationPolesTranslations"][];
  association_public_files: components["schemas"]["ItemsAssociationPublicFiles"][];
  association_public_files_translations: components["schemas"]["ItemsAssociationPublicFilesTranslations"][];
  association_social_links: components["schemas"]["ItemsAssociationSocialLinks"][];
  association_translations: components["schemas"]["ItemsAssociationTranslations"][];
  commission_memberships: components["schemas"]["ItemsCommissionMemberships"][];
  commission_memberships_translations: components["schemas"]["ItemsCommissionMembershipsTranslations"][];
  commissions: components["schemas"]["ItemsCommissions"][];
  commissions_social_links: components["schemas"]["ItemsCommissionsSocialLinks"][];
  commissions_translations: components["schemas"]["ItemsCommissionsTranslations"][];
  events: components["schemas"]["ItemsEvents"][];
  galleries: components["schemas"]["ItemsGalleries"][];
  game_star: components["schemas"]["ItemsGameStar"];
  game_star_articles: components["schemas"]["ItemsGameStarArticles"][];
  game_star_articles_translations: components["schemas"]["ItemsGameStarArticlesTranslations"][];
  game_star_events: components["schemas"]["ItemsGameStarEvents"][];
  game_star_events_translations: components["schemas"]["ItemsGameStarEventsTranslations"][];
  game_star_projects: components["schemas"]["ItemsGameStarProjects"][];
  game_star_projects_translations: components["schemas"]["ItemsGameStarProjectsTranslations"][];
  game_star_social_links: components["schemas"]["ItemsGameStarSocialLinks"][];
  game_star_translations: components["schemas"]["ItemsGameStarTranslations"][];
  icbd: components["schemas"]["ItemsIcbd"][];
  icbd_activities: components["schemas"]["ItemsIcbdActivities"][];
  icbd_activities_icbd_speakers: components["schemas"]["ItemsIcbdActivitiesIcbdSpeakers"][];
  icbd_activities_registrations: components["schemas"]["ItemsIcbdActivitiesRegistrations"][];
  icbd_activities_translations: components["schemas"]["ItemsIcbdActivitiesTranslations"][];
  icbd_files: components["schemas"]["ItemsIcbdFiles"][];
  icbd_phds: components["schemas"]["ItemsIcbdPhds"][];
  icbd_speakers: components["schemas"]["ItemsIcbdSpeakers"][];
  icbd_translations: components["schemas"]["ItemsIcbdTranslations"][];
  inventory: components["schemas"]["ItemsInventory"][];
  languages: components["schemas"]["ItemsLanguages"][];
  members: components["schemas"]["ItemsMembers"][];
  news: components["schemas"]["ItemsNews"][];
  news_commissions: components["schemas"]["ItemsNewsCommissions"][];
  news_partners: components["schemas"]["ItemsNewsPartners"][];
  news_translations: components["schemas"]["ItemsNewsTranslations"][];
  partner_category: components["schemas"]["ItemsPartnerCategory"][];
  partner_category_translations: components["schemas"]["ItemsPartnerCategoryTranslations"][];
  partners: components["schemas"]["ItemsPartners"][];
  registrations: components["schemas"]["ItemsRegistrations"][];
  save_the_date: components["schemas"]["ItemsSavetheDate"];
  save_the_date_translations: components["schemas"]["ItemsSavetheDateTranslations"][];
  social_links: components["schemas"]["ItemsSocialLinks"][];
  std_cell: components["schemas"]["ItemsStdCell"][];
  std_cell_translations: components["schemas"]["ItemsStdCellTranslations"][];
  subsonic: components["schemas"]["ItemsSubsonic"];
  subsonic_translations: components["schemas"]["ItemsSubsonicTranslations"][];
};
