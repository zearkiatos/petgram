FROM node:14-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm
# set working directory
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3500

CMD npm run docker:dev