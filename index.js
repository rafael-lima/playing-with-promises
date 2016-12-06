'use strict';

const rp = require('request-promise');
const Options = require('./options');

const request = uri =>
	rp(new Options({
		uri
	}));

const uri = 'https://api.github.com/users/rafael-lima';

const faell = {
	repos: uri + '/repos',
	followers: uri + '/followers'
};

Promise.all([request(faell.repos), request(faell.followers)])
	.then(results => {
		const wrap = ('=').repeat(25);

		results.forEach((list, index) => {
			let category = (index === 0) ? 'REPOSITORIES' : 'FOLLOWERS';

			console.log(`${wrap} RL'S ${category} (${list.length}) ${wrap}`);

			list.forEach((item, index) => {
				let output = `=> [${index + 1}] ${item.full_name || item.login}`;

				if (index !== list.length - 1)
					console.log(output + ';');
				else
					console.log(output + '.');
			});
		});
	})
	.catch(console.error);