FROM golang:1.25-alpine

WORKDIR /app

# Copy go mod dan sum files
COPY go.mod go.sum ./
# Download dependencies
RUN go mod download

# Copy source code
COPY . .

# Build aplikasi
RUN go build -o main .

# Expose port 8080
EXPOSE 8080

# Jalankan
CMD ["go", "run", "main.go"]