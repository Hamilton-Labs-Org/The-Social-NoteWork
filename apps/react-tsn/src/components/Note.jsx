import React from "react";
import Markdown from "react-markdown";

import { format } from "date-fns";
import styled from "styled-components";

const StyledNote = styled.article`
	max-width: 800px;
	margin: 0 auto;
`;

const MetaData = styled.div`
	@media (min-width: 500px) {
		display: flex;
		align-items: top;
	}
`;

const MetaInfo = styled.div`
	padding-right: 1.5em;
`;

const UserActions = styled.div`
	margin-left: auto;
`;

const Note = ({ note }) => {
	return (
		<StyledNote>
			<MetaData>
				<MetaInfo>
					<em>by</em> {note.author.username}
					<br />
					{format(note.createdAt, "MMM Do yyyy")}
				</MetaInfo>
				<UserActions>Favorites: {note.favoriteCount}</UserActions>
			</MetaData>
			<Markdown children={note.content} />
			<br />
		</StyledNote>
	);
};

export default Note;
