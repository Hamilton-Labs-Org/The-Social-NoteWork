import Query from './query.js';
import Mutation from './mutation.js';
import GraphQLDateTime from 'graphql-iso-date';
const models = {
	Query,
	Mutation,
	DateTime: GraphQLDateTime,
};
export default models;
