import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


const resolve = (filePath) => {
  return path.resolve(__dirname, filePath)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  envDir: resolve('./src/env'),
  envPrefix: 'DSZ_',
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [resolve('./src/assets/images/icons')],
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      "@": resolve('./src')
    }
  }
})
