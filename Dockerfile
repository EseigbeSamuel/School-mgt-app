# ================================
# Stage 1: Build Angular App
# ================================
FROM node:20-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install only necessary deps first
COPY package*.json ./
RUN npm install --force --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Install Angular CLI
RUN npm install -g @angular/cli@19

# Optional: accept NODE_ENV from outside, fallback to production
ARG NODE_ENV=production
ARG PROJECT_NAME=flexy-demy-ui
EXPOSE 4200
# Build Angular app
RUN ng build --configuration=$NODE_ENV --output-path=dist/$PROJECT_NAME/browser

# Optional: List built files for debug
RUN ls -al dist/$PROJECT_NAME/browser


RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular files from previous stage
COPY --from=build /app/dist/flexy-demy-ui/browser /usr/share/nginx/html

# Optionally expose (but not needed in production since central nginx is used)
# EXPOSE 80
#
## ================================
## Stage 2: Serve Angular via NGINX
## ================================
#FROM nginx:alpine
#
## Clean default NGINX content
#RUN rm -rf /usr/share/nginx/html/*
#
## Copy built Angular app to NGINX's html directory
##COPY --from=build /app/dist/browser /usr/share/nginx/html
#COPY --from=build /app/dist/flexy-demy-ui/browser /usr/share/nginx/html
#
## Use custom nginx.conf if needed (recommended for Angular routes)
## Create this file in your project root
#COPY default.conf /etc/nginx/conf.d/default.conf
#
## Expose port
#EXPOSE 80
#
## Run nginx in foreground
#CMD ["nginx", "-g", "daemon off;"]
