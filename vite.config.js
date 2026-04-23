import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path is the repo name so assets resolve correctly on
// https://<user>.github.io/<repo>/. Override with VITE_BASE for custom domains.
const base = process.env.VITE_BASE ?? '/claude/'

export default defineConfig({
  base,
  plugins: [react()],
})
