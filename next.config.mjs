/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                port: '',
                pathname: "/images/0m1l86ta/**"
            }
        ]
    }
};

export default nextConfig;
