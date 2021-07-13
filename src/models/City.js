'use strict';

const { Model } = require('objection');

class City extends Model {

	static get tableName() {
		return 'cities';
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

	static getAll(filters = {}) {
		return this.query()
			.skipUndefined(filters.country)
			.where('country', filters.country);
	}

	static create(city) {
		return this.query().insert(city);
	}
}

module.exports = City;