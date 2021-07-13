'use strict';

const handler = require('./cities-create.handler');
const Joi = require('joi');

const route = {
    handler,
    method: 'POST',
    options: {
        auth: false,
        validate: {
            payload: {
                name: Joi.string().required(),
                code: Joi.string().allow(null),
                short_description: Joi.string().allow(null),
                long_description: Joi.string().allow(null),
                url_images: Joi.array().items(Joi.string()).allow(null),
                country: Joi.string().allow(null),
            },
        },
    },
    path: '/cities'
};

module.exports = route;
