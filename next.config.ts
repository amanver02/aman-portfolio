import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // Static HTML export for GitHub Pages
  trailingSlash: true,       // GitHub Pages needs trailing slashes
  images: {
    unoptimized: true,       // next/image needs this for static export
  },
  // If your repo is amanver02/aman-portfolio, set basePath:
  // basePath: "/aman-portfolio",
  // assetPrefix: "/aman-portfolio/",
};

export default nextConfig;
