# base image
FROM node:alpine 

# directory in the image
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY demo.js ./

EXPOSE 8080

CMD [ "node", "demo.js" ]