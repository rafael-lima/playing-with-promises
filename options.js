'use strict';

module.exports = class Options {
	constructor(options) {
		this.uri = options.uri;
		this.json = true;
		this.headers = {
			'User-Agent': 'Request-Promise'
		} || options.headers;
	}
};