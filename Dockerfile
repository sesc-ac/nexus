# BUILD
FROM node:20-alpine AS builder

WORKDIR /app
COPY . .

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN npm install
RUN npx prisma generate
# RUN npx prisma migrate deploy 
# RUN npm run build

# PRODUCTION
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app ./

RUN npm install --omit=dev

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npm run build && npm start"]