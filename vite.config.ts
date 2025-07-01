import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  base: '/api-monitor/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
}))
