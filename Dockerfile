# Uses node version 22 as our base image
FROM node:22-alpine
# Consider using a more secure and stable base image to reduce vulnerabilities.
# For example, use node:22-alpine instead of node:22-slim if possible:
# FROM node:22-alpine

# Goes to the app directory
WORKDIR /app

# Copies the package.json and package-lock.json files to the app directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copies the rest of the application files to the app directory
COPY . .

# Set port environment variable
ENV PORT=8080

# Expose the port so the app runs and access it
EXPOSE 8080

# Run the app
CMD [ "npm", "start" ]



