/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Ensures it generates static files
  trailingSlash: true, // GitHub Pages requires trailing slashes
  images: {
    unoptimized: true, // Avoids issues with Next.js image optimization
  },
  basePath: '/personal-website',
};

module.exports = nextConfig;