// @ts-check
/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  swcMinify: false,
  productionBrowserSourceMaps: true,
};
