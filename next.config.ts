import { NextConfig } from 'next';

const nextConfig: NextConfig = {
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 (Add next.config.js wrapper)
    serverActions: true
  }
};

export default nextConfig;
