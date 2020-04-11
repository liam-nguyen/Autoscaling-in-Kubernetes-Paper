# base image
FROM node:alpine 

# directory in the image
WORKDIR /usr/src/app

# Copy dependecy
COPY package*.json ./

# Install dependency in image
RUN npm install

# Copy demo code
COPY demo.js ./

# Expose port 
EXPOSE 8080

# Start command
CMD [ "node", "demo.js" ]