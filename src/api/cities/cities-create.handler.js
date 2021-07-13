'use strict';

const City = require('./../../models/City')

async function handler(request, h) {
	const city = await City.create(request.payload);
	return h.response(city).code(201);
}

module.exports = handler;
