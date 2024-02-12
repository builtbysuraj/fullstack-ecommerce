/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

type ViteConfigInput = {
  mode: string
  command: string
}

export default (args: ViteConfigInput) => {
  const generateScopedName =
    args.mode === 'development'
      ? '[name]_[local]_[hash:base64:4]'
      : '[hash:base64:6]'

  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: '__test__/setup',
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName,
      },
    },
    server: {
      proxy: {
        '/api': 'http://localhost:5000',
      },
    },
  })
}
