import styled from "styled-components";

import NxWelcome from "./nx-welcome";
import Pages from "../pages";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
	return (
		<StyledApp>
			{/* <NxWelcome title="react-tsn" /> */}
			<Pages />
		</StyledApp>
	);
}

export default App;
