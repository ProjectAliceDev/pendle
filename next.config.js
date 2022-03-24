const images = require('next-images');
const withCompose = require('next-compose-plugins');

const plugins = [images];

const nextConfig = {
	cssModules: true,
    reactStrictMode: false,
	// webpack5: false,
};

module.exports = withCompose(plugins, nextConfig);