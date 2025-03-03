# Use a lightweight Node.js image
FROM node:18-alpine
# Set the working directory
WORKDIR /app
# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install
# Copy the rest of the app files
COPY . .
# Expose the Vite development server port
EXPOSE 2407
# Run the Vite development server
CMD ["npm", "run", "dev", "--", "--host"]
