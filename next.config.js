/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/synethia/:path*",
        destination: "/synethia/:path*/index.html",
      },
    ];
  },
};

module.exports = nextConfig;
