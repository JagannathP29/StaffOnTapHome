/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.builder.io"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
