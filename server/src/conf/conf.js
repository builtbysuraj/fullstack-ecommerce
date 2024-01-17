import dotenv from 'dotenv'
dotenv.config({
  path: './.env',
})

export const ENV = {
  MONGODB_URL: String(process.env.MONGODB_URL),
  MONGODB_URL_LOCAL: String(process.env.MONGODB_URL_LOCAL),

  RAZORPAY_API_KEY: String(process.env.RAZORPAY_API_KEY),
  RAZORPAY_APT_SECRET: String(process.env.RAZORPAY_APT_SECRET),

  CORS_ORIGIN: String(process.env.CORS_ORIGIN),
}
