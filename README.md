## [Portfolio 2022](https://www.darioworld.com)

made with NextJS and Directus headless CMS

------

Reinstall for prod or dev :

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
    API: 'https://api.url.com', // Modify here
  },
  images: {
    domains: ['api.url.com'], // Modify here
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

And a simple **nginx reverse proxy** (...draw the rest of the f*cking owl)

```nginx
server {
    server_name www.mywebsite.com; # Modify here
  
    location / {
        proxy_pass http://localhost:3000/; # Default npm port
    }
}
```

Install SSL with certbot (install it before running... duh)

```bash
sudo certbot --nginx
```



### And voila!

