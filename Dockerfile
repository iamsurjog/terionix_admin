FROM node:22-slim AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Proxy target for API requests — overridable at build time via --build-arg
ARG API_PROXY_TARGET=http://localhost:8001
ENV API_PROXY_TARGET=$API_PROXY_TARGET

RUN npm run build

FROM node:22-slim AS run

WORKDIR /app
COPY --from=build /app/.output ./.output
COPY --from=build /app/package.json ./

EXPOSE 3001

CMD ["node", ".output/server/index.mjs"]
