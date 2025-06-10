/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // i18n configuration is handled by middleware.ts
  // in the app router approach (Next.js 13+)
};

module.exports = nextConfig;
