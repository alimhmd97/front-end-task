/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.sakneen.com'],
    minimumCacheTTL: 60,
  }
}

module.exports = nextConfig
