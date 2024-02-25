// pnpm install @apollo/server express graphql cors http graphql-tag
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import helmet from 'helmet';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import depthLimit from 'graphql-depth-limit';
import {createComplexityLimitRule} from 'graphql-validation-complexity';
import dotenv from 'dotenv';
dotenv.config();

// Local module imports
import db from './db.js';
import models from './models/index.js';
import typeDefs from './schema.js';
import resolvers from './resolvers/index.js';

// Run our server on a port specified in our .env file or port 4000
const port = process.env.PORT || 4000;
const host = 'http://localhost:';
const DB_HOST = process.env.DB_HOST;
const endpoint = '/api';
const app = express();
const router = express.Router();
const httpServer = http.createServer(app);
db.connect(DB_HOST);

// Apollo Server setup
const server = new ApolloServer({
	typeDefs,
	resolvers,
	csrfPrevention: false,
	validationRules: [depthLimit(5), createComplexityLimitRule(1000)],
	plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});

await server.start();

// get the user info from a JWT
const getUser = (token) => {
	if (token) {
		try {
			// return the user information from the token return jwt.verify
			return jwt.verify(token, process.env.JWT_SECRET);
		} catch (err) {
			// if there's a problem with the token, throw an error throw new
			Error('Session invalid');
		}
	}
};

app.use(
	endpoint,
	helmet({
		contentSecurityPolicy: {
			directives: {
				/* ... */
			},
			reportOnly: true,
		},
	}),
	cors({
		origin: 'http://localhost:4200',
		allowMethods: '*',
		allowedHeaders: '*',
		credentials: true,
	}),
	express.json(),
	expressMiddleware(server, {
		context: async ({req}) => {
			// get the user token from the headers
			const token = req.headers.authorization;
			// try to retrieve a user with the token
			const user = getUser(token);
			// for now, let's log the user to the console:
			// if (user) {
			// 	console.log(user);
			// }
			// add the db models and the user to the context
			return {models, user};
		},
	}),
);

app.use('/:id/verify/:token/', cors(), async (req, res, next) => {
	try {
		const user = await models.User.findOne({_id: req.params.id});
		console.log(user);
		if (!user) return res.status(400).send({message: 'Invalid link'});

		const token = await models.Token.findOne({
			userId: user._id,
			token: req.params.token,
		});

		if (!token)
			return res.status(400).send({message: 'Invalid link'});

		await user.updateOne({_id: user._id, verified: true});

		await token.deleteOne();

		res.status(200).send({message: 'Email verified successfully'});
		// res.redirect('/');
		next();
	} catch (error) {
		res.status(500).send({message: 'Internal Server Error'});
	}
});

app.use('/:id/reset/:token/', cors(), async (req, res, next) => {
	try {
		const user = await models.User.findOne({_id: req.params.id});
		console.log(user);
		if (!user) return res.status(400).send({message: 'Invalid link'});

		const token = await models.Token.findOne({
			userId: user._id,
			token: req.params.token,
		});

		if (!token)
			return res.status(400).send({message: 'Invalid link'});

		await user.updateOne({_id: user._id, reset: true});

		await token.deleteOne();

		res.status(200).send({message: 'Email verified successfully'});
		// res.redirect('/');
		next();
	} catch (error) {
		res.status(500).send({message: 'Internal Server Error'});
	}
});

// Modified server startup
await new Promise((resolve) =>
	httpServer.listen({port: port}, resolve),
);

console.log(`🚀 Server ready at ${host}${port}${endpoint}`);
