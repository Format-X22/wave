FROM node:14
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm install --only=production
COPY ./src/ ./src
CMD [ "node", "./src/index.js" ]
