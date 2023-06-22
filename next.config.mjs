import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "https://lh3.googleusercontent.com",
      "ik.imagekit.io",
      "og-image.vercel.app",
      "media3.giphy.com",
      "media0.giphy.com",
      "github.com",
    ],
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client"],
  },
}

export default withContentlayer(nextConfig)
