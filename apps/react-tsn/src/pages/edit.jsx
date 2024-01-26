import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
// import the GET_NOTE query
import { GET_NOTE, GET_ME } from "../gql/query";
import { EDIT_NOTE } from "../gql/mutation";

// import the NoteForm component
import NoteForm from "../components/NoteForm";

// the note query, which accepts an ID variable

// query hook, passing the id value as a variable
const EditNote = (props) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
	// fetch the current user's data
	const { data: userdata } = useQuery(GET_ME);
	// define our mutation
	const [editNote] = useMutation(EDIT_NOTE, {
		variables: {
			id,
		},
		onCompleted: () => {
			navigate(`/note/${id}`);
		},
	});

	if (loading)
		// if the data is loading, display a loading message

		return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error! Note not found</p>;

	// if the current user and the author of the note do not match
	if (userdata.me.id !== data.note.author.id) {
		return <p>You do not have access to edit this note</p>;
	}
	// return <Note note={data.note} />;
	// pass the data and mutation to the form component
	return <NoteForm content={data.note.content} action={editNote} />;
};

export default EditNote;
