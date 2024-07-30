/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    domains: ["twitter.com", "pbs.twimg.com"],
  },
};

module.exports = nextConfig;
