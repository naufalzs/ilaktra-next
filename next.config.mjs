/** @type {import('next').NextConfig} */

const hostnames = ["images.unsplash.com", "assets.api.uizard.io"];
const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
