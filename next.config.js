/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect www to non-www (choose your preferred canonical URL)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.yoursonghere.com',
          },
        ],
        destination: 'https://yoursonghere.com/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
