FROM node:alpine3.14

WORKDIR /app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 8081

RUN npm run build

CMD ["npm", "run", "serve"];