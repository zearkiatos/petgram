FROM node:14-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm
# set working directory
WORKDIR /app

COPY . .

RUN npm install && \
    npm install webpack --save-dev && \
    npm install webpack-cli --save-dev

EXPOSE 8080

CMD npm run build && \
    npm run docker:dev