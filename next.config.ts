// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: {
    unoptimized: true,
  },
  basePath: '/avanfish', 
};

module.exports = nextConfig;
