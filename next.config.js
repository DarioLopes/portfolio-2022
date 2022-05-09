/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

module.exports = {
    reactStrictMode: true,
    env: {
        API: 'https://admin.darioworld.com',
    },
    images: {
        domains: ['admin.darioworld.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
}
