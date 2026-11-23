/** Static export: Next builds /out, which is what Netlify will publish. */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true }
};
export default nextConfig;
