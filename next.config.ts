import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
