import styled from 'styled-components';
import {
	ApolloClient,
	ApolloProvider,
	HttpLink,
	gql,
	from,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';

import GlobalStyle from '../components/GlobalStyle.jsx';
import {cache} from './cache.js';
import Pages from '../pages';

const StyledApp = styled.div`
	// Your style here
`;

const uri = import.meta.env.VITE_REACT_APP_API_URI;

const httpLink = new HttpLink({
	uri: uri,
});
const authLink = setContext((_, {headers}) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: localStorage.getItem('token') || '',
		},
	};
});

export const typeDefs = gql`
	extend type Query {
		isLoggedIn: Boolean!
	}
`;

const errorLink = onError(({graphQLErrors, networkError}) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({message, locations, path}) =>
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	if (networkError) console.error(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
	link: from([authLink, errorLink, httpLink]),
	cache: cache,
	resolvers: {},
	typeDefs,
	connectToDevTools: true,
});

export function App() {
	return (
		<ApolloProvider client={client}>
			<StyledApp>
				<GlobalStyle />
				<Pages />
			</StyledApp>
		</ApolloProvider>
	);
}

export default App;
