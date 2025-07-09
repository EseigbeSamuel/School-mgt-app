# ================================
# Stage 1: Build Angular App
# ================================
FROM node:20-alpine AS angular-builder

WORKDIR /app

COPY package*.json ./
RUN npm install --force --legacy-peer-deps

COPY . .

RUN npm install -g @angular/cli@19

ARG NODE_ENV=production
ARG PROJECT_NAME=flexy-demy-ui

RUN ng build --configuration=$NODE_ENV --output-path=dist

RUN mkdir -p /output && cp -r dist/* /output/
