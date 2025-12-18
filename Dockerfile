# Base Builder
FROM node:20 AS builder

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Run build
RUN npm run build
RUN npm prune --omit=dev

# Base Runner
FROM node:20 AS runner

# Working directory
WORKDIR /app

# Env
ENV NODE_ENV=production

# Copy from builder
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Expose the port
EXPOSE 3000

# Run the application
CMD [ "npm", "start" ]
