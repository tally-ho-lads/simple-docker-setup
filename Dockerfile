FROM node:16.6.0

WORKDIR /app

COPY ["package.json", "package-lock.json", "/app/"]

COPY . /app

RUN npm install

EXPOSE 8001

CMD [ "node", "index.js"]
