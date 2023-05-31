/** @type {import('next').NextConfig} */
const nextConfig = {}
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/repository-name' : '',
  output: 'export',
 reactStrictMode: true,
 webpackDevMiddleware: config => {
 config.watchOptions = {
   poll: 800,
   aggregateTimeout: 300,
 }
 return config
 },
}