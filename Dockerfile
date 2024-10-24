
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install mysql2

COPY . .

ENV NODE_ENV=development

EXPOSE 3000

CMD ["npm", "run", "dev"]
