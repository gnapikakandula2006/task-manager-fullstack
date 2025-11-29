# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 5173
CMD ["npm", "run", "preview"]
# Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html