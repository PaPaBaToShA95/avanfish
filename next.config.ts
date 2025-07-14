/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: false,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
      {
        source: "/sitemap-:path*.xml", // Додаємо для всіх sitemap-файлів (sitemap-0.xml, sitemap-1.xml тощо)
        headers: [
          { key: "Content-Type", value: "application/xml" },
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;