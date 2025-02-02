/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/personal-website",
  assetPrefix: "/personal-website/",
};

module.exports = nextConfig;