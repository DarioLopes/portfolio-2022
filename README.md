## Portfolio 2022

made with NextJS and Directus headless CMS

https://www.darioworld.com

------

Reinstall :

```bash
git clone git@github.com:DarioLopes/portfolio-2022.git ./app
npm i
npm run dev ## Or "npm run build" + pm2 for prod
```

create next.config.js at the root for the url API and SVG support

```javascript
/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  env: {
    API: 'https://api.url.com',
  },
  images: {
    domains: ['api.url.com'],
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

