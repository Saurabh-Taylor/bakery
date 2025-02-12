import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // for temporary purpose
  },
  typescript:{
    ignoreBuildErrors: true
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.unsplash.com",

      },
      {
        protocol:"https",
        hostname:"plus.unsplash.com",
      }
    ]
  }
};

export default nextConfig;
