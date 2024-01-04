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
		favoriteCount: Int!
		favoritedBy: [User!]
	}

	type User {
		id: ID!
		username: String!
		email: String!
		avatar: String
		notes: [Note!]!
		favorites: [Note!]
	}

	type Query {
		hello: String
		notes: [Note!]!
		note(id: ID): Note!
		user(username: String!): User
		users: [User!]!
		me: User!
	}

	type Mutation {
		newNote(content: String!): Note
		updateNote(id: ID!, content: String!): Note!
		deleteNote(id: ID!): Boolean!
		signUp(
			username: String!
			email: String!
			password: String!
		): String!
		signIn(
			username: String
			email: String
			password: String!
		): String!
		toggleFavorite(id: ID!): Note!
	}
`;

export {typeDefs as default};
