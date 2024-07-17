FROM node:22-alpine

RUN addgroup app && adduser -S -D app -G app
USER app

WORKDIR /app

COPY --chown=app:app package*.json ./
RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "run", "dev" ]



