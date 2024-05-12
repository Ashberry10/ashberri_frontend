# Use an official Node runtime as a parent image
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) into the working directory
COPY package*.json ./
# If you're using yarn, uncomment the next line and comment out the npm install line
# COPY yarn.lock ./

# Install project dependencies
RUN npm install
# If you're using yarn, uncomment the next line and comment out the npm install line
# RUN yarn install

# Bundle app source inside Docker image
COPY . .

# Build the Next.js app
RUN npm run build

# Your app binds to port 3000 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD [ "npm", "start" ]