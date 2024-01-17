import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import Note from "../components/Note";

// the note query, which accepts an ID variable
const GET_NOTE = gql` query note($id: ID!) {
        note(id: $id) {
          id
          createdAt
          content
          favoriteCount
          author {
            username
            id
            avatar
}
}
} 
`;

// query hook, passing the id value as a variable

const NotePage = (props) => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

	if (loading)
		// if the data is loading, display a loading message

		return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error! Note not found</p>;

	return (
		<>
			<div>
				<p>ID: {id}</p>
			</div>
			<Note note={data.note} />
		</>
	);
};

export default NotePage;
