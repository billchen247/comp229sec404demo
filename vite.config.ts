import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'

// Read the deploy base path from an env var so the same source works for
// Netlify (served from `/`) and GitHub Pages (served from `/<repo-name>/`).
// The Pages workflow sets VITE_BASE_PATH before running `npm run build`.
const basePath = process.env.VITE_BASE_PATH || '/';

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
