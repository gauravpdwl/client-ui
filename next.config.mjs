/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'catalog-service-product-images.s3.ap-south-1.amazonaws.com',
            },
        ],
    },
};

export default nextConfig;