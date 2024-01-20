import styled from "styled-components";
import {
	ApolloClient,
	NormalizedCacheObject,
	ApolloProvider,
	createHttpLink,
	useQuery,
	gql,
	InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import GlobalStyle from "../components/GlobalStyle.jsx";
import NxWelcome from "./nx-welcome";
import { cache } from "./cache.js";
import Pages from "../pages";

const StyledApp = styled.div`
  // Your style here
`;

const uri = import.meta.env.VITE_REACT_APP_API_URI;
const httpLink = createHttpLink({
	uri: uri,
});

export const typeDefs = gql`
   extend type Query {
     isLoggedIn: Boolean!
   }
 `;

const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

// configure Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
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
