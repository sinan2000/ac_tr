/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/admin/intent/:path*',
                destination: '/admin',
            }
        ]
    }
};

export default nextConfig;