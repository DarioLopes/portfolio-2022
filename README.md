## [Portfolio 2022](https://www.darioworld.com)

made with NextJS and Directus headless CMS

------

Reinstall :

```bash
cd /to/my/app/path/
git clone git@github.com:DarioLopes/portfolio-2022.git .
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

And a simple **nginx reverse proxy** (...draw the rest of the fucking owl)
