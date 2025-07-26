import createMDX from "@next/mdx";

const withMDX = createMDX({
  options: {
    // Removed all plugins for minimal config
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    mdxRs: false, // Keep MDX RS disabled for now
  },
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
