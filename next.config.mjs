/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "media.graphassets.com" },
      { hostname: "res.cloudinary.com" },
    ],
  },
}

export default nextConfig
