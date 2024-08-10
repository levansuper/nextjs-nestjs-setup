# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app


# Copy the rest of the application code, excluding temp folders and node_modules
COPY . .

# Install dependencies
RUN npm ci

# Build the Next.js application
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]