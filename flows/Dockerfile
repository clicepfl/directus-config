FROM node:22-alpine

WORKDIR /app

COPY flows/package.json flows/package-lock.json ./
RUN npm ci --frozen

COPY flows/tsconfig.json  ./
COPY flows/src ./src
RUN rm src/types
COPY types ./src/types

RUN npx tsc --project tsconfig.json

CMD ["node", "dist/main.js"]

