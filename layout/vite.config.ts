import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'layout',
      filename: 'layout.js',
      exposes: { './Layout': './src/Layout.tsx' },
      remotes: { page: 'http://localhost:4173/assets/page.js' },
      shared: [
        'react',
        'react-dom',
        'react-router',
        'tss-react',
        '@emotion/react'
      ]
    })
  ]
})
