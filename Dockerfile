FROM node:22-slim AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-slim AS run

WORKDIR /app
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./

EXPOSE 3001

CMD ["node", ".output/server/index.mjs"]
