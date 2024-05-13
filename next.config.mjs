/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  scripts: {
    build: 'prisma generate && next build',
  },
  experimental :{
    serverComponentsExternalPackaging: true,
  }
};

export default nextConfig;
