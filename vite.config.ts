import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace 'your-repo-name' with your actual GitHub repository name
  base: '/is117-GameDevPortfolio/', 
})