'use strict';

const Joi = require('joi');
const handler = require('./routes-create.handler');

const route = {
    handler,
    method: 'POST',
    options: {
        validate: {
            payload: {
                id: Joi.number().integer().allow(null),
                name: Joi.string().required(),
                code: Joi.string().allow(null),
                description: Joi.string().allow(null),
                url_images: Joi.array().items(Joi.string()).allow(null),
                route_cities: Joi.array().items({
                    city_id: Joi.number().integer().required(),
                    order: Joi.number().integer().positive(),
                }).allow(null),
            },
        },
    },
    path: '/routes'
};

module.exports = route;
