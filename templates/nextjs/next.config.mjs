/** @type {import('next').NextConfig} */

// When deploying to a sub-path (e.g. GitHub Pages project sites), the CI
// pipeline sets NEXT_PUBLIC_BASE_PATH (e.g. "/my-repo/nextjs"). Left empty
// for local development so the app keeps serving from "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Static HTML export — required for GitHub Pages / S3 / any static host.
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // next/image optimization is server-only; disable for static export.
    unoptimized: true,
  },
};

export default nextConfig;
