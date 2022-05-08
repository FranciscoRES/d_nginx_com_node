FROM node:18.1

WORKDIR /usr/src/app

RUN npm i express@4.18.1 \
          mysql2@2.3.3

EXPOSE 5000

COPY server.js .

CMD ["node", "server.js"]
