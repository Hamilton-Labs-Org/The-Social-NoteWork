// pnpm install @apollo/server express graphql cors http graphql-tag
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
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

app.use(
	'/',
	cors(),
	express.json(),
	expressMiddleware(server, {
		context: async ({req, res}) => {
			return {models};
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
