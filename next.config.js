/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [],
    minimumCacheTTL: 60,
  },
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  trailingSlash: true,
};
const withTM = require("next-transpile-modules")(["gsap"]);

module.exports = withTM({});

module.exports = nextConfig
