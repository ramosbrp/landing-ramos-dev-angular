# Etapa 1 - Build da aplicação Angular
FROM node:18 AS build

# Definir diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e package-lock.json primeiro para cache eficiente
COPY package*.json ./

# Instalar dependências
RUN npm install --legacy-peer-deps

# Copiar todo o código do projeto
COPY . .

# Fazer o build da aplicação Angular
RUN npm run build --prod

# Etapa 2 - Servindo arquivos estáticos com Nginx
FROM nginx:1.25 AS server

# Remover configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d

# Copiar configuração personalizada para servir Angular
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar os arquivos gerados pelo Angular na etapa de build para o diretório do Nginx
COPY --from=build /app/dist/ramos-dev/browser /usr/share/nginx/html

# Expõe a porta padrão do Nginx
EXPOSE 80

# Comando padrão para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
