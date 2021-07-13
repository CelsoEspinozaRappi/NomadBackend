'use strict';

const handler = require('./cities-list.handler');

const route = {
    handler,
    method: 'GET',
    options: {
        auth: 'token',
    },
    path: '/cities'
};

module.exports = route;
