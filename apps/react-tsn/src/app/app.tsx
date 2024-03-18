import styled from 'styled-components';
import {
	ApolloClient,
	NormalizedCacheObject,
	ApolloProvider,
	HttpLink,
	gql,
	from,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

import GlobalStyle from '../components/GlobalStyle.jsx';
import {cache} from './cache.js';
import Pages from '../pages';

const StyledApp = styled.div`
	// Your style here
`;

const uri = import.meta.env.VITE_REACT_APP_API_URI;

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

// configure Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	link: from([
		new HttpLink({
			uri: uri,
			headers: {
				authorization: localStorage.getItem('token'),
			},
		}),
		errorLink,
	]),
	cache,
	resolvers: {},
	typeDefs,
	connectToDevTools: true,
});

export function App() {
	return (
		<ApolloProvider client={client}>
			<StyledApp>
				{/* <NxWelcome title="react-tsn" /> */}
				<GlobalStyle />
				<Pages />
			</StyledApp>
		</ApolloProvider>
	);
}

export default App;
