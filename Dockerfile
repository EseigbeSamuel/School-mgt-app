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

# ================================
# Stage 2: Serve with NGINX
# ================================
FROM nginx:alpine AS nginx-server

# Clean default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from previous stage
COPY --from=angular-builder /app/dist/browser /usr/share/nginx/html

# Optional: expose if NOT using central nginx
EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]
