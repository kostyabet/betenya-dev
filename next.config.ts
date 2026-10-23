import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  async redirects() {
    return [
      {
        // 308: вес обратных ссылок на betenya.dev передаётся канонической /ru
        source: '/',
        destination: '/ru',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
