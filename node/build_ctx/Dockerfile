FROM node:18.1

WORKDIR /usr/src/app

RUN npm i express@4.18.1 \
          mysql2@2.3.3

EXPOSE 5000

COPY server.js .

CMD ["node", "server.js"]

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz
