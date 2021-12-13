/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
  reactStrictMode: true,
  distDir: 'build',
};
