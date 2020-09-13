FROM node:12

WORKDIR /usr/src/client

COPY ./Client/package*.json ./

RUN npm install

COPY ./Client .

EXPOSE 3000
CMD [ "npm", "start" ]