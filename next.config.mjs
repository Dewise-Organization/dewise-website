/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/dewise-website',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

export default nextConfig

