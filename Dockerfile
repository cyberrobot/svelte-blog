FROM node:16.14-alpine3.14 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:16.14-alpine3.14
USER node:node
WORKDIR /app
COPY --from=build --chown=node:node /app/build ./build
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY package.json .

ENV PUBLIC_CLIENT_ENV=production
EXPOSE 3000
CMD ["node", "build"]
