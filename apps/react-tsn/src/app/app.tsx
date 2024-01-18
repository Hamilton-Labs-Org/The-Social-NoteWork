import styled from "styled-components";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import GlobalStyle from "../components/GlobalStyle.jsx";
import NxWelcome from "./nx-welcome";
import Pages from "../pages";

const StyledApp = styled.div`
  // Your style here
`;

const uri = import.meta.env.VITE_REACT_APP_API_URI;
const cache = new InMemoryCache();

// configure Apollo Client
const client = new ApolloClient({ uri, cache, connectToDevTools: true });

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
