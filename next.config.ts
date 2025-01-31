import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  image: {
    unoptimized: true,
  },
  basePath: '/personal-website', // same as your repo name
};

export default nextConfig;
