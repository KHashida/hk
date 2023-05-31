/** @type {import('next').NextConfig} */
const nextConfig = {}
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/nextjs-docker' : '',
  output: 'export'
}