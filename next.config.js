const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
    },
    reactStrictMode: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
    i18n,
};

module.exports = nextConfig;
