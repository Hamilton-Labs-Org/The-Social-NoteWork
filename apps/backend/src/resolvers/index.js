import Query from './query.js';
import Mutation from './mutation.js';
import Note from './note.js';
import User from './user.js';
import GraphQLDateTime from 'graphql-iso-date';
const models = {
	Query,
	Mutation,
	Note,
	User,
	DateTime: GraphQLDateTime,
};
export default models;
