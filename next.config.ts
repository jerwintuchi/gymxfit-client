import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/media/**', // Allow any path under /media/
      },], 
  },

};

export default nextConfig;

