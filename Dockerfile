FROM node:20-bullseye

WORKDIR /app

COPY package.json ./

RUN npm install

RUN apt-get update
RUN apt-get install chromium -y

COPY . .
RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]