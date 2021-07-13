'use strict';

const Hapi = require('hapi');
const Joi = require('joi');
const validateToken = require('./authentication-token');
const AuthBearer = require('hapi-auth-bearer-token');
const dbConfig = require('./config/dbconfig');
//services
const cityList = require('./src/api/cities/cities-list.route');
const cityCreate = require('./src/api/cities/cities-create.route');
const routeCreate = require('./src/api/routes/routes-create.router');

dbConfig.initConnection();

async function initServer() {
	const options = {
		port: process.env.PORT,
		host: process.env.HOST,
		routes: {
			cors: {
				origin: ['*'],
			},
		},
		app: {},
	};
	const server = Hapi.server(options);

	await server.register(AuthBearer);
	server.auth.strategy('token', 'bearer-access-token', {
		validate: validateToken,
	});

    // health check
	server.route({
		method: 'GET',
		options: {
			auth: false,
		},
		path: '/health',
		handler: function (request, h) {
			return "Running OK";
		}
	});

	server.route(cityList);
	server.route(cityCreate);
	server.route(routeCreate);

	// Corre el servidor.
	await server.start();
	console.log(`Server is running at ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

initServer();
