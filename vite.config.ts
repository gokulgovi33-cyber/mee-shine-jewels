import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  // Listen on the local network too, so phones on the same Wi-Fi can open the site
  server: { host: true, port: 5173 },
  preview: { host: true },
})
