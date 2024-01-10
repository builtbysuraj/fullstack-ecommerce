import dotenv from 'dotenv'
dotenv.config({
  path: './.env',
})

export const ENV = {
  MONGODB_URL: String(process.env.MONGODB_URL),
  MONGODB_URL_LOCAL: String(process.env.MONGODB_URL_LOCAL),

  CORS_ORIGIN: String(process.env.CORS_ORIGIN),
}
