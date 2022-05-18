/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  env: {
    API: 'www.whathever.com',
  },
  images: {
    domains: ['www.whathever.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
