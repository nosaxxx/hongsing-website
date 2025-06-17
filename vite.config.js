import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react( ),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // 請在這裡添加或修改以下兩行：
  base: 	'/hongsing-website/', // 請將 'hongsing-website' 替換為您的GitHub倉庫名稱
  build: {
    outDir: 'docs' // 將這裡的 'dist' 改為 'docs'
  }
})

