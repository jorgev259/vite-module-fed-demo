import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'page',
      filename: 'page.js',
      exposes: {
        './VeryCoolPage': {
          import: './src/pages/VeryCoolPage.tsx',
          dontAppendStylesToHead: true
        },
        './NotSoCoolPage': {
          import: './src/pages/NotSoCoolPage.tsx',
          dontAppendStylesToHead: true
        }
      },

      remotes: {
        layout: 'http://localhost:4173/assets/layout.js'
      },
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
