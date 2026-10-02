import { defineConfig } from 'vite'

export default defineConfig({
  base: '/portfolio-engenharia-civil/',
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
