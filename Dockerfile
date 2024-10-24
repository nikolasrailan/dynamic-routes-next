# Use a imagem do Node.js 18 como base
FROM node:18

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e o package-lock.json para o container
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código do projeto para o container
COPY . .

# Define a variável de ambiente para o ambiente de desenvolvimento
ENV NODE_ENV=development

# Exposição da porta usada pelo Next.js (por padrão, é a 3000)
EXPOSE 3000

# Comando para iniciar a aplicação no modo de desenvolvimento
CMD ["npm", "run", "dev"]
