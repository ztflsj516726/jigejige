const isProduction = process.env.NODE_ENV === 'production'

const assetPrefix = isProduction ? '/out' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/out' : '',
  assetPrefix: isProduction ? '/out' : '',
  env: {
    ASSET_PREFIX: assetPrefix
  }
}

module.exports = nextConfig
