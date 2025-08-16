import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/john-doe-portfolio/', // <-- CHANGE avec le nom exact du repo GitHub
})
