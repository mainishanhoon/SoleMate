export const BASE_URL = import.meta.env.VITE_BACKEND_URL.startsWith('http')
  ? import.meta.env.VITE_BACKEND_URL
  : `https://${import.meta.env.VITE_BACKEND_URL}`;
