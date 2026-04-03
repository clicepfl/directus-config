# Directus flows

This folder contains a NodeJS webserver that is able to process database updates, based on the [Flows](https://directus.io/docs/guides/automate/flows) feature of Directus. Its main goal is to replace said Flows on Directus by flows written in Typescript to ease development, review and testing.

## Design

The webserver consists of a single route on `/` that waits for `POST` requests with the body described by the [`DirectusMessage`](src/directus.ts) type. There is no authentication on this route, as it's meant to be available only in the Directus' instance dedicated Docker stack. Directus contains a single flow that is triggered by any change in the database (create, update or delete) and that simply calls this webserver and forwards the trigger's data.

When the webserver receives a message, it dispatches to all `Flow`s registered to this particular event (see the [`registerFlow`](src/registry.ts) function). `Flow`s are basically handler functions, taking as parameter the event and some extra utilities. For convenience, Typescript definitions for all the events are available in [src/directus.ts](src/directus.ts). All files registering flows should be placed within the [`src/flows`](src/flows) directus, or in subfolders.

### Utilities

Flow handler receive the following utilities objects/methods:

- `fetch/update` methods: These two methods allow to easily read or update the element(s) affected by the event. Note that `fetch` is only available for the `Update` event as the `Create` one has the full object in the payload. The `Delete` event has no associated function since the elements are already removed from the database and therefore cannot be read.

  **Note:** these methods are stored in the `event` rather than the `utils` parameter of the handler, this is because they need the same generic arguments as the event, and adding this genericity to `HandlerUtils` would probably make the flows more messy to write. This may be an improvement for later.

- Mailer: this object exposes a single `sendMail` function, which does as its name says.
- Directus: handle to directly access the directus instance to read/update/delete entries.

### TTL

An issue that may arise from updating Directus from within a flow is that it could cause and infinite loop of updates and flow trigger, for example if a flow always updates the entry it was triggered from. To circumvent this, a TTL is implemented through the `User-Agent` header used when the Directus handle (see above) accesses the instance. The header is set to a base and is appended a decrementing integer (see the `DIRECTUS_AGENT_BASE` and `DIRECTUS_AGENT_TTL` configuration variable below), and if an event arrives with a TTL of zero then it is ignored. However this is merely a failsafe as flows should normally never get into such a loop.

## Configuration

| Name                  | Default value       | Required | Description                                                                                          |
| --------------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `PORT`                | 3000                | No       | Port on which the server will listen                                                                 |
| `DIRECTUS_URL`        |                     | Yes      | URL to access the Directus instance issuing the events.                                              |
| `DIRECTUS_TOKEN`      |                     | No       | Access token to interact with Directus. If not specified, access is done through the `public` role.  |
| `DIRECTUS_AGENT_BASE` | `"directus-flows-"` | No       | Start of the `User-Agent` header when interacting with Directus (see [TTL](#ttl)).                   |
| `DIRECTUS_AGENT_TTL`  | 5                   | No       | Number of consecutive triggers allowed (see [TTL](#ttl)).                                            |
| `SMTP_HOST`           |                     | Yes      | Hostname for the SMTP server.                                                                        |
| `SMTP_PORT`           | 587                 | No       | Port to access the SMTP server.                                                                      |
| `SMTP_SECURE`         | true                | No       | If set to false, attemps to communicate with the SMTP server using STARTTLS, otherwise uses SSL/TLS. |
| `SMTP_USER`           |                     | Yes      | Username for SMTP login.                                                                             |
| `SMTP_PASSWORD`       |                     | Yes      | Password for SMTP login.                                                                             |
| `SMTP_FROM`           |                     | Yes      | `from` field for sent emails.                                                                        |

## Build

The webserver is built into a Docker image, but it must be noted that the [`Dockerfile`](./Dockerfile) expects to be built at the root of the repository, as it needs to access the Directus' schema stored in [`../types/`](../types/).
