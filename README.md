## Portfolio 2022

made with NextJS and Directus headless CMS

[Visit Here](https://www.darioworld.com)

------

create next.config.js for the url API and SVG support

```javascript
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    API: 'https://myapi.url.com',
  },
  images: {
    domains: ['myapi.url.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

```

