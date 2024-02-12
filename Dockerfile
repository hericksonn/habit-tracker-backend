# Imagem base utilizando Node.js 16, que é compatível com as versões mais recentes do Prisma
FROM node:20 AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar 'package.json' e 'package-lock.json' (ou 'yarn.lock')
COPY package*.json ./

# Instalar dependências do projeto, incluindo as do Prisma
RUN npm install

# Copiar os arquivos do Prisma para o diretório de trabalho
COPY prisma ./prisma/

# Gerar o cliente Prisma
RUN npx prisma generate

# Copiar o restante dos arquivos do projeto
COPY . .

# Construir o aplicativo NestJS para produção
RUN npm run build

# Etapa de produção
FROM node:20

# Definir diretório de trabalho
WORKDIR /app

# Copiar os arquivos de produção da etapa de build
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Expor a porta em que sua aplicação irá rodar
EXPOSE 3000

# Comando para executar a aplicação
CMD ["node", "dist/main"]
