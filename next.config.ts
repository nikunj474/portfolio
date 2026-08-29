import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: the whole site is pre-rendered to HTML at build time and
  // served by GitHub Pages. No Node runtime in production.
  output: "export",

  // Trailing slashes keep GitHub Pages' directory-index resolution happy, so
  // /about serves out/about/index.html rather than 404ing.
  trailingSlash: true,

  // next/image's optimizer needs a server; there isn't one on Pages.
  images: { unoptimized: true },
};

export default nextConfig;
