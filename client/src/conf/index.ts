export const ENV = {
  API_BASE_URL: String(import.meta.env.VITE_API_BASE_URL),
  SERVER_URL:
    process.env.NODE_ENV === 'production'
      ? String(import.meta.env.VITE_SERVER_URL)
      : String(import.meta.env.VITE_SERVER_URL_LOCAL),
}
