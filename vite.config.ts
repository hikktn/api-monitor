import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => ({
  base: command === 'build' ? '/repo-name/' : '/',   // build 时生效
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
}))
