import React, { useEffect } from "react";

const Favorites = () => {
	useEffect(() => {
		// update the document title
		document.title = "Favorites - NoteWork";
	});
	return (
		<>
			<div>
				<h2>These are my favorites</h2>
			</div>
		</>
	);
};
export default Favorites;
