import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  crossOrigin: 'anonymous',
  devIndicators: false,
  output: "standalone",
  eslint: { ignoreDuringBuilds: true }
};

export default nextConfig;
