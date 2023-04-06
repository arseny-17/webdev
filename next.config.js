/** @type {import('next').NextConfig} */
const path = require("path");
//const CopyPlugin = require("copy-webpack-plugin");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // future: {
  //   webpack5: true,
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    
    config.plugins.push(
      // new CopyPlugin({
      //   patterns: [
      //     {
      //       from: path.join(__dirname, "node_modules/tinymce"),
      //       to: path.join(__dirname, "public/assets/libs/tinymce"),
      //     },
      //   ],
      // })
    )

    config.module.rules.push({
      test: /\.css$/,
      use: 'raw-loader',
    })

    return config;
  },
  // webpackDevMiddleware: (config) => {
  //   return config;
  // },
};

module.exports = nextConfig;
