/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV = 'Production' // EMPTY for development. Otherwise Production
const nextConfig = {
    basePath: isProd ? '/CV' : '',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig