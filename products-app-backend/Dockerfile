FROM node:alpine3.14

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["node", "dist/main"]