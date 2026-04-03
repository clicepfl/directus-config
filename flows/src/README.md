# Directus flows

This folder contains a NodeJS webserver that is able to process database updates, based on the [Flows](https://directus.io/docs/guides/automate/flows) feature of Directus. Its main goal is to replace said Flows on Directus by flows written in Typescript to ease development, review and testing.

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
