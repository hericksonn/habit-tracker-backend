# Imagem base
FROM node:14

# Diretório de trabalho no contêiner
WORKDIR /app

# Copiar arquivos de dependências e instalar
COPY package*.json ./
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o servidor usa
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
