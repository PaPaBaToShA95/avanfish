/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: false, // Вимкнути автоматичну прокрутку
  },
  images: {
    unoptimized: true,
  },
  remotePatterns: [
    {
      protocol: 'https',
      hostname: '**',
    },
  ],
};

module.exports = nextConfig;
