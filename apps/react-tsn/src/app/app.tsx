import styled from "styled-components";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	ApolloLink,
	HttpLink,
	gql,
} from "@apollo/client";
import GlobalStyle from "../components/GlobalStyle.jsx";
import NxWelcome from "./nx-welcome";
import Pages from "../pages";

const StyledApp = styled.div`
  // Your style here
`;

const uri = import.meta.env.VITE_REACT_APP_API_URI;
const httpLink = new HttpLink({ uri });

export const typeDefs = gql`
   extend type Query {
     isLoggedIn: Boolean!
     cartItems: [ID!]!
   }
 `;
const cache = new InMemoryCache();
// check for a token and return the headers to the context

// configure Apollo Client
const client = new ApolloClient({
	cache: new InMemoryCache(),
	headers: {
		authorization: localStorage.getItem("token") || "", // however you get your token
	},
	uri: uri,
	typeDefs,
	resolvers: {},
	connectToDevTools: true,
});

// write the cache data on initial load
cache.writeQuery({
	query: gql`query isUserLoggedIn {isLoggedIn @client}`,
	data: { isLoggedIn: !!localStorage.getItem("token") },
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
