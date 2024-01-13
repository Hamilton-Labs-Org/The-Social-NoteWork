import React, { useEffect } from "react";

const Home = () => {
	useEffect(() => {
		// update the document title
		document.title = "Home - NoteWork";
	});
	return (
		<>
			<div>
				<h2>This is the home page</h2>
				{/* add a list of links here */}
			</div>
		</>
	);
};
export default Home;
