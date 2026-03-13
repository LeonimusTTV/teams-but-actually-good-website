FROM oven/bun:canary-alpine

WORKDIR /app

COPY . .

RUN bun install

RUN bun run build

EXPOSE 5173

CMD ["bun", "run", "dev"]