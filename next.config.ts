import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Preload fonts and colors in all scss files. */
  sassOptions: {
    additionalData: `@use '@/styles/_colors' as *; @use '@/styles/_typography' as *;`,
  }
};

export default nextConfig;
