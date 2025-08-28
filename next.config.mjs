/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'standalone',
  webpack: (config, context) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          handlebars: 'handlebars/dist/handlebars.js',
        },
      },
    }
  },
}
export default nextConfig
