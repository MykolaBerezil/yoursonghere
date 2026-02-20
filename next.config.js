/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect non-www to www (since Railway has www.yoursonghere.com)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'yoursonghere.com',
          },
        ],
        destination: 'https://www.yoursonghere.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
