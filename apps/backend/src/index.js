// pnpm install @apollo/server express graphql cors http graphql-tag
import {ApolloServer} from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4';
import {ApolloServerPluginDrainHttpServer} from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import gql from 'graphql-tag';
import dotenv from 'dotenv';
dotenv.config();
import db from './db.js';
import models from './models/index.js';

const port = process.env.PORT || 4000;
const host = process.env.HOST || 'http://localhost:';
const endpoint = '/api';
const app = express();
const httpServer = http.createServer(app);
const DB_HOST = process.env.DB_HOST;

const notes = [
	{
		id: '1',
		content: 'This is the 1st note in our "notework"',
		author: 'Terence Hamilton',
	},
	{id: '2', content: 'This is the next note', author: 'Some Author'},
	{id: '3', content: 'Yet another note!', author: 'Another Author'},
];

const typeDefs = gql`
	#graphql
	type Note {
		id: ID!
		content: String!
		author: String!
	}

	type Query {
		hello: String
		notes: [Note!]!
		note(id: ID!): Note!
	}

	type Mutation {
		newNote(content: String!): Note!
	}
`;

const resolvers = {
	Query: {
		hello: () => 'Hello world!',
		// notes: () => notes, * ---> in-memory notes response
		notes: async () => {
			return await models.Note.find();
		},
		note: async (parent, args) => {
			return await models.Note.findById(args.id);
		},
		// note: (parent, args) => { * ---> in-memory note response
		//   return notes.find((note) => note.id === args.id)
		// },
	},
	Mutation: {
		newNote: async (parent, args) => {
			return await models.Note.create({
				content: args.content,
				author: 'Terence Hamilton',
			});
		},
		// newNote: (parent, args) => {  * ---> In-memory mutation
		//   let noteValue = {
		//     id: String(notes.length + 1),
		//     content: args.content,
		//     author: 'Terence Hamilton',
		//   }
		//   notes.push(noteValue)
		//   return noteValue
		// },
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
	plugins: [ApolloServerPluginDrainHttpServer({httpServer})],
});

await server.start();

app.use(endpoint, cors(), express.json(), expressMiddleware(server));

app.listen(port, () =>
	console.log(`🚀 Server ready at ${host}${port}${endpoint}`),
);
db.connect(DB_HOST);
