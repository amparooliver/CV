/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV = 'Production' // EMPTY for development. Otherwise Production
const nextConfig = {
    basePath: isProd ? '/CV' : '',
    output: 'export',
    //distDir: 'dist',
    images: {
        unoptimized: true,
        path: isProd ? '/CV/_next/image' : '/_next/image',
    },
};

module.exports = nextConfig