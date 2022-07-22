FROM node:14

ARG SSH_PRIVATE_KEY START_SCRIPT
ENV START_COMMAND=$START_SCRIPT
RUN mkdir /root/.ssh && echo "StrictHostKeyChecking no " > /root/.ssh/config
RUN echo "${SSH_PRIVATE_KEY}" > /root/.ssh/id_rsa && ssh-keyscan bitbucket.com >> /root/.ssh/known_hosts
RUN chmod 700 /root/.ssh/id_rsa

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json package-lock.json ./

RUN npm install

COPY . .

# build application & remove development dependencies
RUN npm run build 
EXPOSE 3000
CMD npm run $START_COMMAND