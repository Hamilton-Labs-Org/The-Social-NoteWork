import React, { useEffect } from "react";
import Button from "../components/Button";
import { useQuery, gql } from "@apollo/client";
import Markdown from "react-markdown";

const Home = () => {
	useEffect(() => {
		// update the document title
		document.title = "Home - NoteWork";
	});
	// our GraphQL query, stored as a variable
	const GET_NOTES = gql`
query NoteFeed($cursor: String) {
        noteFeed(cursor: $cursor) {
          cursor
          hasNextPage
          notes {
            id
            createdAt
            content
            favoriteCount
            author {
              username
              id
              avatar
} }
} }
`;
	// query hook
	const { data, loading, error, fetchMore } = useQuery(GET_NOTES);
	if (loading)
		// if the data is loading, display a loading message
		return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error!</p>;
	return (
		<>
			<div>
				<h2>This is the home page</h2>
				{/* add a list of links here */}
				<Button>Click me!</Button>
			</div>
			<div>
				<p> </p>
			</div>
			<div>
				{data.noteFeed.notes.map((note) => (
					<article key={note.id}>
						{" "}
						{note.author.username} {note.createdAt} {note.favoriteCount}{" "}
						<Markdown children={note.content} />
					</article>
				))}
			</div>
		</>
	);
};
export default Home;
