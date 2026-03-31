FROM node:22-alpine

WORKDIR /app

COPY hooks/package.json hooks/package-lock.json ./
RUN npm ci --frozen

COPY hooks/tsconfig.json  ./
COPY hooks/src ./src
RUN rm src/types
COPY types ./src/types

RUN npx tsc --project tsconfig.json

CMD ["node", "dist/main.js"]

