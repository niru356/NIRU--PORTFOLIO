import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import imagemin from 'unplugin-imagemin/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagemin({
    // optional config, e.g., set mode to 'sharp'
    // default mode is 'sharp' for better compatibility
  })],
})
