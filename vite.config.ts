import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure this matches your GitHub repository name exactly for Pages deployment
  base: '/is117-GameDevPortfolio/', 
})