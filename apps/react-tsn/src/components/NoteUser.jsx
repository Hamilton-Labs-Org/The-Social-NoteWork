import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
// import our GET_ME query
import { GET_ME } from "../gql/query";

const NoteUser = (props) => {
	const { loading, error, data } = useQuery(GET_ME);
	// if the data is loading, display a loading message
	if (loading) return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error!</p>;

	return (
		<>
			Favorites: {props.note.favoriteCount}
			<br />
			{data.me.id === props.note.author.id && (
				<>
					<Link to={`/edit/${props.note.id}`}>Edit</Link>;
				</>
			)}
		</>
	);
};
export default NoteUser;
