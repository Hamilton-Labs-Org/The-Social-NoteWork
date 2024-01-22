import React, { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { useNavigate } from "react-router-dom";
// import the NoteForm component
import NoteForm from "../components/NoteForm";

import { GET_NOTES } from "../gql/query";

// within the NewNote component update the mutation
//everything else stays the same

// our new note query
const NEW_NOTE = gql`
mutation newNote($content: String!) {
        newNote(content: $content) {
          id
          content
          createdAt
          favoriteCount
          favoritedBy {
id
username 
}
author {
username
id 
}
} 
}
`;
const NewNote = (props) => {
	useEffect(() => {
		//update the document title
		document.title = "New Note - NoteWork";
	});

	const navigate = useNavigate();
	const [data, { loading, error }] = useMutation(NEW_NOTE, {
		// refetch the GET_NOTES query to update the cache
		refetchQueries: [{ query: GET_NOTES }],
		onCompleted: (data) => {
			// when complete, redirect the user to the note page
			console.log(data);
			// props.history.push(`note/${data.newNote.id}`);
			navigate(`note/${data.newNote.id}`);
		},
	});

	return (
		<>
			{/* as the mutation is loading, display a loading message*/}
			{loading && <p>Loading...</p>}
			{/* if there is an error, display a error message*/}
			{error && <p>Error saving the note</p>}
			{/* the form component, passing the mutation data as a prop */}
			<NoteForm action={data} />
		</>
	);
};

export default NewNote;
