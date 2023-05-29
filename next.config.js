/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.weatherbit.io"],
  },
  experimental: {
  //   externalDir: true | {
  //       enabled: true,
  //       silent: true,
  //  },
    appDir: true,
    serverComponentsExternalPackages: ["@tremor/react"],
  },
}

module.exports = nextConfig
