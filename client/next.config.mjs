/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Ignore node-specific modules when bundling for the browser
        // https://webpack.js.org/configuration/resolve/#resolvealias
        config.resolve.alias = {
            ...config.resolve.alias,
            "sharp$": false,
            "onnxruntime-node$": false,
        }
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
