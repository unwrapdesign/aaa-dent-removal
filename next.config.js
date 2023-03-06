/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['@unwrapdev/library']); // pass the modules you would like to see transpiled

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
