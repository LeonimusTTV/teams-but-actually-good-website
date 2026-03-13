FROM oven/bun:canary-alpine AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM oven/bun:canary-alpine AS runtime

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5173

COPY --from=build /app/dist ./dist
COPY --from=build /app/server.mjs ./server.mjs

EXPOSE 5173

CMD ["bun", "run", "start"]