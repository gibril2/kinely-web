import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The How it works page was folded into the home page (demo section + Fair questions).
  async redirects() {
    return [{ source: '/how-it-works', destination: '/#how-it-works', permanent: true }]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    cpus: 1,
  },
  webpack: (config) => {
    config.parallelism = 1
    return config
  },
}

export default nextConfig
