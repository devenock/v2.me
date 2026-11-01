import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({});

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],
  experimental: {
    // Rust MDX compiler with GFM; JS remark plugins can't be serialized by Turbopack.
    mdxRs: { mdxType: "gfm" },
  },
  devIndicators: false,
};

export default withMDX(nextConfig);
