/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/avanfish',
  assetPrefix: '/avanfish/', 
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
