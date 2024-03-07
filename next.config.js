/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: true,
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  scope: '/',
  sw:'service-worker.js',
  register: true
})

module.exports = withPWA(nextConfig);
