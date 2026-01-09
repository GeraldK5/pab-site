/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure environment variables are available
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  },
}

export default nextConfig
