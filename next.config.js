const withNextIntl = require('next-intl/plugin')('./src/i18n.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization for better Core Web Vitals
  images: {
    domains: [
      'images.prismic.io',
      'media2.dev.to',
      'www.atlassian.com',
      'imagedelivery.net',
      'weaviate.io',
      'images.unsplash.com',
      'techhub.iodigital.com',
      'www.pedroalonso.net',
      's3.amazonaws.com',
      'assets.northflank.com',
      'ext.same-assets.com'

    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Compression and performance
  compress: true,
  poweredByHeader: false,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Add more redirects as needed
    ]
  },

  // Additional optimizations
  swcMinify: true,

  // Bundle analyzer for optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      }
    }

    return config
  },
}

module.exports = withNextIntl(nextConfig);
