/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    "*": ["src/generated/prisma/**"],
  },
};

module.exports = nextConfig;
