import styled from "styled-components";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	ApolloLink,
	HttpLink,
} from "@apollo/client";
import GlobalStyle from "../components/GlobalStyle.jsx";
import NxWelcome from "./nx-welcome";
import Pages from "../pages";

const StyledApp = styled.div`
  // Your style here
`;

const uri = import.meta.env.VITE_REACT_APP_API_URI;
const httpLink = new HttpLink({ uri: uri });
const cache = new InMemoryCache();
// check for a token and return the headers to the context
const authLink = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers }) => ({
		headers: {
			authorization: localStorage.getItem("token") || "", // however you get your token
			...headers,
		},
	}));
	return forward(operation);
});

// configure Apollo Client
const client = new ApolloClient({
	link: authLink.concat(httpLink),
	uri,
	cache,
	resolvers: {},
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
