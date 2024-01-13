import React, { useEffect } from "react";

const MyNotes = () => {
	useEffect(() => {
		// update the document title
		document.title = "My Notes - NoteWork";
	});
	return (
		<>
			<div>
				<h2>These are my notes</h2>
			</div>
		</>
	);
};
export default MyNotes;
