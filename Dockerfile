FROM node:14.4-alpine3.12
WORKDIR /nodejs-build
COPY package*.json ./
COPY tsconfig*.json ./
COPY src/ ./src/
RUN npm install && npm run build


FROM node:14.4-alpine3.12
WORKDIR /nodejs
COPY package*.json ./
COPY src/ ./src/
COPY --from=0 /nodejs-build/.dest/ ./.dest/
RUN npm install --only=production
CMD [ "npm", "start" ]
