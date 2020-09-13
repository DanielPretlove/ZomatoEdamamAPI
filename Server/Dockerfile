FROM node:12

WORKDIR /usr/src/server

COPY ./Server/package*.json ./

RUN npm install

COPY ./Server .

EXPOSE 3000

CMD [ "node", "app.js" ]