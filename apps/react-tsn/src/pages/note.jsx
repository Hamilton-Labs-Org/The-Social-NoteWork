import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Note from "../components/Note";
import { GET_NOTE } from "../gql/query";

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
			<Link to={{ id }}>Permalink</Link>
		</>
	);
};

export default NotePage;
