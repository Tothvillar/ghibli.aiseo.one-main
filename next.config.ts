import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.aiseo.one',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.aiseo.one',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
