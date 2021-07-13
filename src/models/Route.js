'use strict';

const { Model } = require('objection');

class Route extends Model {

	static get tableName() {
		return 'routes';
	}

	static get relationMappings() {
		return {
			route_cities: {
				relation: Model.HasManyRelation,
				modelClass: `${__dirname}/RouteCity.js`,
				join: {
					from: 'routes.id',
					to: 'route_cities.route_id',
				},
			},
		};
	}

	static get jsonSchema() {
		return {
			type: 'object',
			properties: {
				url_images: {
					type: 'array',
				}
			}
		}
	}

	static create(route) {
		return this.query().insertGraph(route);
	}
}

module.exports = Route;