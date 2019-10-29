FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g yarn http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN yarn global add @angular/cli

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

ENTRYPOINT ["/app/webapp/entrypoint.sh"]
