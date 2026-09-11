import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/petshop-amigo', // Nome exato do teu repositório
  images: {
    unoptimized: true, // Necessário para imagens em exportação estática
  },
};

export default nextConfig;