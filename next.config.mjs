/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: 'app/ui/imageloader.tsx',
        unoptimized: true,
    },
};

export default nextConfig;