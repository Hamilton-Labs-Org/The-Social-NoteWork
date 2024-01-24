import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import Button from "../components/Button";
import NoteFeed from "../components/NoteFeed";
import { GET_NOTES } from "../gql/query";

const Home = () => {
	useEffect(() => {
		// update the document title
		document.title = "Home - NoteWork";
	});
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
			<NoteFeed notes={data.noteFeed.notes} />
			{/* Only display the Load More button if hasNextPage is true */}{" "}
			{data.noteFeed.hasNextPage && (
				<Button
					onClick={() =>
						fetchMore({
							variables: {
								cursor: data.noteFeed.cursor,
							},
							updateQuery: (previousResult, { fetchMoreResult }) => {
								return {
									noteFeed: {
										cursor: fetchMoreResult.noteFeed.cursor,
										hasNextPage: fetchMoreResult.noteFeed.hasNextPage,
										// combine the new results and the old
										notes: [
											...previousResult.noteFeed.notes,
											...fetchMoreResult.noteFeed.notes,
										],
										__typename: "noteFeed",
									},
								};
							},
						})
					}
				>
					Load more
				</Button>
			)}
		</>
	);
};
export default Home;
