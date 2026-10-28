FROM node:22-alpine AS extensions
WORKDIR /extensions
RUN npm install directus-extension-sync

FROM directus/directus:12.5.1

COPY --from=extensions /extensions/node_modules/directus-extension-sync ./extensions/directus-extension-sync

