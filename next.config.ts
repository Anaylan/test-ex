import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: {
      ssr: true,
      minify: true,
    },
  },
  pageExtensions: ['tsx', 'ts']
};

export default nextConfig;
