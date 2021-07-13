'use strict';

const { Model } = require('objection');

class RouteCity extends Model {

	static get tableName() {
		return 'route_cities';
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				route_id: {
                    type: ['integer', 'null'],
                },
                city_id: {
                    type: ['integer', 'null'],
                },
                order: {
                    type: ['integer', 'null'],
                },
			},
		}
	}
}

module.exports = RouteCity;