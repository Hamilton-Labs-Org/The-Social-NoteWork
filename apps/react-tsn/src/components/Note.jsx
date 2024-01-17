import React from "react";
import Markdown from "react-markdown";

const Note = ({ note }) => {
	return (
		<article>
			{" "}
			{note.author.username} {note.createdAt} {note.favoriteCount}{" "}
			<Markdown children={note.content} />
		</article>
	);
};

export default Note;
