import styled from "styled-components";

import NxWelcome from "./nx-welcome";
import StartHere from "./start-here";
const StyledApp = styled.div`
  // Your style here
`;

export function App() {
	return (
		<StyledApp>
			{/* <NxWelcome title="to The Social NoteWork" /> */}
			<StartHere start="Start Here" />
		</StyledApp>
	);
}

export default App;
