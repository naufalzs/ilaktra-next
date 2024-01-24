/** @type {import('next').NextConfig} */

const hostnames = ["images.unsplash.com"];
const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
