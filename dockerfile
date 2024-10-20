
# for production

FROM node:17.9.0-alpine3.15

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .
RUN npm install --only=production



EXPOSE 3000

ENTRYPOINT ["node", "app.js"]