import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" }
    ]
  },
  async redirects() {
    return [
      { source: "/admin", destination: "/keystatic", permanent: false },
      { source: "/academics", destination: "/academics/kindergarten", permanent: false },
      { source: "/learning", destination: "/academics/kindergarten", permanent: false },
      { source: "/learning/:path*", destination: "/academics/:path*", permanent: false }
    ];
  }
};

export default nextConfig;
