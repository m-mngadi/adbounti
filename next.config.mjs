/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.NEXT_PUBLIC_APP_URL],
      allowedForwardedHosts: [process.env.NEXT_PUBLIC_FORWARD_X],
    },
  },
};

export default nextConfig;
