FROM oven/bun:1.2.4

WORKDIR /app

ADD . /app

RUN bun install
EXPOSE 3000

CMD ["bun", "run", "src/index.tsx"]