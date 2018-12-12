FROM node

WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production
RUN npm audit fix
COPY ./dist .
COPY .env .

COPY .env .

EXPOSE 4545:4545

CMD NODE_ENV=production node index.js