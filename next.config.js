/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static exports
  basePath: '/web_event', // The base path for your GitHub Pages repository
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig
