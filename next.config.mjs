/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { isServer }) {
        // Only include the canvas module in the server environment
        if (isServer) {
            config.externals = {
                ...config.externals,
                canvas: "commonjs canvas",
            };
        }

        // Return the updated configuration
        return config;
    },
};

export default nextConfig;
