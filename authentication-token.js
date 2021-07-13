'use strict';

const { getByToken } = require('./src/models/User');

async function authenticate(request, token) {
	try {
		if (process.env.DEFAULT) {
			return {
				isValid: true,
				credentials: {
					id: 1,
					name: 'Angie',
					last_name: 'Hernandez',
					country: 'CO'
				}
			}
		}
		const user = await getByToken(token);
		if (user) {
			delete user.identifier;
			return { isValid: true, credentials: { ...user } };
		}
	} catch (error) {
		/* eslint-disable no-console */
		console.log(`Error to validate token ${error}`);
	}
	return { isValid: false, credentials: {} };
}

module.exports = authenticate;
