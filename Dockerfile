FROM oven/bun:1.2.4

WORKDIR /app

COPY . .

RUN bun install
EXPOSE 3000

CMD ["bun", "./index.html"]