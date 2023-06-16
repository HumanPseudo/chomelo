# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Set the production environment variable
ENV NODE_ENV=production

# Expose the desired port (por ejemplo, 3000 si tu aplicación usa el puerto 3000)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]