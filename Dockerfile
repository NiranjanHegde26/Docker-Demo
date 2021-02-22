FROM node:14

# Creating app directory
WORKDIR /usr/src/app

# Installing app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]