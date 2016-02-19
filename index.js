'use strict';
module.exports = function () {
	var ver = process.version;
	ver = ver.replace(/^v/i, '');

	var semver = ver.split('.');

	return {
		full: ver,
		major: parseInt(semver[0], 10),
		minor: parseInt(semver[1], 10),
		patch: parseInt(semver[2], 10)
	};
};
