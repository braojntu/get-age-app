# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:14-slim

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies
# A. For non production builds do not use ci
RUN npm install --production

# B. If you are building your code for production use below
# Imp Note: cipm can only install packages with 
# an existing package-lock.json or npm-shrinkwrap.json 
# RUN npm ci --only=production

# copy all contents to /app directory
COPY . .
EXPOSE 8080

# Run the web service on container startup.
CMD ["node", "server.js"]