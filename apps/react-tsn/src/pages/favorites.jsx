import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import NoteFeed from "../components/NoteFeed";
// import the query
import { GET_MY_FAVORITES } from "../gql/query";

const Favorites = () => {
	useEffect(() => {
		// update the document title
		document.title = "Favorites - NoteWork";
	});

	const { loading, error, data } = useQuery(GET_MY_FAVORITES);

	if (loading)
		// if the data is loading, our app will display a loading message
		return "Loading...";
	if (error)
		// if there is an error fetching the data, display an error message
		return `Error! ${error.message}`;
	// if the query is successful and there are notes, return the feed of notes // else if the query is successful and there aren't notes, display a message
	if (data.me.favorites.length !== 0) {
		return <NoteFeed notes={data.me.favorites} />;
	} else {
		return <p>No favorites yet</p>;
	}

	// return (
	// 	<>
	// 		<div>
	// 			<h2>These are my favorites</h2>
	// 		</div>
	// 	</>
	// );
};
export default Favorites;
