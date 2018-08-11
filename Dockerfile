FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm update -g && cnpm install
RUN cnpm install node-dev -g
VOLUME /usr/src/app
EXPOSE 9527
CMD [ "npm", "start" ]
