FROM oven/bun:canary-alpine

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 5173

CMD ["bun", "run", "dev"]