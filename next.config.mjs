/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/apple-app-site-association",
                destination: '/api/apple-app-site-association',
            }
        ];
    }
};

export default nextConfig;
