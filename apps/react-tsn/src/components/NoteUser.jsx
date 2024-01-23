import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
// import our GET_ME query
import { GET_ME } from "../gql/query";
// import the DeleteNote component
import DeleteNote from "./DeleteNote";

const NoteUser = (props) => {
	const { loading, error, data } = useQuery(GET_ME);
	// if the data is loading, display a loading message
	if (loading) return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error!</p>;

	return (
		<>
			{data.me.id === props.note.author.id && (
				<>
					<Link to={`/edit/${props.note.id}`}>Edit</Link>
					<br />
					<DeleteNote noteId={props.note.id} />
				</>
			)}
			<br />
			Favorites: {props.note.favoriteCount}
		</>
	);
};
export default NoteUser;
