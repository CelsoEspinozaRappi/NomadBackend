'use strict';

const Route = require('./../../models/Route')
const Boom = require('boom');

async function handler(request, h) {
    try {
        const route = await Route.create(request.payload);
        return h.response(route).code(201);
    } catch (error) {
        console.log("ASDFASDFASDF", error);
        return Boom.badImplementation(error, error);
    }
}

module.exports = handler;
