'use strict';

const { Model } = require('objection');

class User extends Model {

	static get tableName() {
		return 'users';
	}

	static getByToken(identifier) {
		return User.query()
			.where('identifier', identifier)
            .first();
	}
}

module.exports = User;