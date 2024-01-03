// pnpm install @apollo/server express graphql cors http graphql-tag
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// Local module imports
import db from './db.js';
import models from './models/index.js';
import typeDefs from './schema.js';
import resolvers from './resolvers/index.js';

// Run our server on a port specified in our .env file or port 4000
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'http://localhost:';
const DB_HOST = process.env.DB_HOST;
const endpoint = '/api';
const app = express();
const httpServer = http.createServer(app);
db.connect(DB_HOST);
// const notes = [
// 	{
// 		id: '1',
// 		content: 'This is the 1st note in our "notework"',
// 		author: 'Terence Hamilton',
// 	},
// 	{id: '2', content: 'This is the next note', author: 'Some Author'},
// 	{id: '3', content: 'Yet another note!', author: 'Another Author'},
// ];

// Apollo Server setup
const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});

await server.start();

// get the user info from a JWT
const getUser = (token) => {
	if (token) {
		try {
			// return the user information from the token return jwt.verify
			token, process.env.JWT_SECRET;
		} catch (err) {
			// if there's a problem with the token, throw an error throw new
			Error('Session invalid');
		}
	}
};

app.use(
	'/',
	cors(),
	express.json(),
	expressMiddleware(server, {
		context: async ({req, res}) => {
			// get the user token from the headers
			const token = req.headers.authorization;
			// try to retrieve a user with the token
			const user = getUser(token);
			// for now, let's log the user to the console:
			if (getUser(token)) {
				return console.log(user);
			}
			// add the db models and the user to the context
			return {models, user};
		},
	}),
);

// Modified server startup
await new Promise((resolve) =>
	httpServer.listen({port: 4000}, resolve),
);

console.log(`🚀 Server ready at ${host}${port}${endpoint}`);
// prettier-ignore
// app.listen(port, () => console.log(`🚀 Server ready at ${host}${port}${endpoint}`));
