'use strict';

const Boom = require('boom');
const City = require('./../../models/City')

async function handler(request, h) {
	const userInfo = request.auth.credentials;
	const filters = { country: userInfo.country };
	const cities = await City.getAll(filters);
	return h.response(cities);
}

module.exports = handler;
