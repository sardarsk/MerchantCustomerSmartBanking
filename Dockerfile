FROM node:12
WORKDIR /app
COPY /template .
RUN yarn cache clean
RUN yarn install
EXPOSE 3000