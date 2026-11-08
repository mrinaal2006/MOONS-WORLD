/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Keep optimised photos cached for 31 days (default is 4 hours), so Vercel
    // doesn't re-process them. If you replace a photo, give it a new file name.
    minimumCacheTTL: 2678400,
    formats: ["image/webp"],
    deviceSizes: [480, 640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [48, 64, 96, 128, 256, 384],
  },
  async headers() {
    // Let browsers cache the static files in /public (logo, icons, photos) for a week.
    return [
      { source: "/:path*.(jpg|png|webp|svg|ico)", headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }] },
    ];
  },
};
export default nextConfig;
