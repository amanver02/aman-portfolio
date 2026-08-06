import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // Static HTML export for GitHub Pages
  trailingSlash: true,       // GitHub Pages needs trailing slashes
  basePath: "/aman-portfolio",      // Repo name on GitHub Pages
  assetPrefix: "/aman-portfolio/",  // Ensures _next assets load correctly
  images: {
    unoptimized: true,       // next/image needs this for static export
  },
};

export default nextConfig;
