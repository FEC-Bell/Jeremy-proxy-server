FROM node:12

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

ENV PORT=3000

RUN npm install

COPY . .

RUN npm run build


EXPOSE 3000

CMD ["node", "./server/server.js"]