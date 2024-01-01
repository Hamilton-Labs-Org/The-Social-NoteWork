import gql from 'graphql-tag';

const typeDefs = gql`
	#graphql
	scalar DateTime

	type Note {
		id: ID!
		content: String!
		author: String!
		createdAt: DateTime!
		updatedAt: DateTime!
	}

	type Query {
		hello: String
		notes: [Note!]!
		note(id: ID): Note!
	}

	type Mutation {
		newNote(content: String!): Note
		updateNote(id: ID!, content: String!): Note!
		deleteNote(id: ID!): Boolean!
	}
`;

export {typeDefs as default};
