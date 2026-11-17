import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // The site is one page now; old links to the separate pages land on their sections.
  redirects: async () => [
    {source: '/projects', destination: '/#projects', permanent: false},
    {source: '/experience', destination: '/#experience', permanent: false},
  ],
};

export default nextConfig;
