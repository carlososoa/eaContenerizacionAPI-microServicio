FROM node:18

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app

RUN npm install

COPY . /home/app

EXPOSE 3001

CMD ["node","/home/app/src/index.js"]