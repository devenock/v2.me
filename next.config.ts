import createMDX from "@next/mdx";

// No remarkPlugins here — Turbopack can't serialize function references.
// GFM support (tables, strikethrough, etc.) is enabled via mdxRs below.
const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    // Rust-based MDX compiler: Turbopack-native and supports GFM out of the box.
    // Replaces the JS remark-gfm plugin that broke Turbopack serialization.
    mdxRs: { mdxType: "gfm" as const },
  },
  devIndicators: false as const,
};

export default withMDX(nextConfig);
