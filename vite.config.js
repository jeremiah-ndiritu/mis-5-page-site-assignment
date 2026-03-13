import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tc from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tc()],
})
