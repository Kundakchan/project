FROM node:alpine
RUN npm i -g nodemon
WORKDIR /code
COPY ./package*.json ./
RUN npm i
COPY ./src/ ./src/
ENTRYPOINT ["nodemon"]
EXPOSE 80
CMD ["./src/index.js"]