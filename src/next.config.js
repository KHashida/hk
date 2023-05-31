/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = {
//   images: {
//     unoptimized: true,
//   },
//   basePath: '/hk',
//   output: 'export',
// }
module.exports = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
  config.watchOptions = {
    poll: 800,
    aggregateTimeout: 300,
  }
  return config
  },
 }