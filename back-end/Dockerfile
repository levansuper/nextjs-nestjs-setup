# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app


# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm ci

# Build the NestJS application
RUN npm run build

# Remove dev dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3001

# Start the application
CMD ["npm", "run", "start:prod"]