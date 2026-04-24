import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/ghibli.aiseo.one-main",
  assetPrefix: "/ghibli.aiseo.one-main/",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/ghibli.aiseo.one-main",
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.aiseo.one",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.xlap.top",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
