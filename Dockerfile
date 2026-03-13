FROM oven/bun:canary-alpine

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=5173

COPY bun.lock ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

EXPOSE 5173

CMD ["bun", "run", "start"]