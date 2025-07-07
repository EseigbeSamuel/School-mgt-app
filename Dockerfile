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
# =============================
# Stage 2: Serve with NGINX
# =============================
FROM nginx:latest

# Clean default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy Angular build from previous stage
COPY --from=build /app/dist/flexy-demy-ui/browser /usr/share/nginx/html

# Optional: expose ports (not used if running behind reverse proxy)
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
