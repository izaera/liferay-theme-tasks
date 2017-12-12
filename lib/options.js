'use strict';

let _ = require('lodash');
let minimist = require('minimist');

let lfrThemeConfig = require('./liferay_theme_config');

let options;

module.exports = function(config) {
	if (!options || config) {
		config = config || {};
		config.argv = minimist(process.argv.slice(2));
		config.pathBuild =
			config.pathBuild || './build/resources/main/META-INF/resources';
		config.pathDist = config.pathDist || './dist';
		config.pathSrc =
			config.pathSrc || './src/main/resources/META-INF/resources';
		config.rubySass = config.rubySass || false;
		config.sassOptions = config.sassOptions || {};

		let themeConfig = lfrThemeConfig.getConfig();

		_.assign(config, themeConfig);

		options = config;
	}

	return options;
};
