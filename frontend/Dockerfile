# Gunakan Node.js
FROM node:22-alpine

# Set folder kerja
WORKDIR /app

# Copy package.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy semua file
COPY . .

# Buka port 5173 (Port default Vite)
EXPOSE 5173

# Jalankan server development
CMD ["npm", "run", "dev"]