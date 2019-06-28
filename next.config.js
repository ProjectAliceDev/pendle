const typescript = require('@zeit/next-typescript');
const images = require('next-images');
const withCompose = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');

module.exports = withCompose([ 
	typescript,
	images,
	withCSS
]);