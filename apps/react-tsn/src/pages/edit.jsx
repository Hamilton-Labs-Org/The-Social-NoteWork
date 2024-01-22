import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

import { Link } from "react-router-dom";

import Note from "../components/Note";

// the note query, which accepts an ID variable

// import the GET_NOTE query
import { GET_NOTE } from "../gql/query";

// query hook, passing the id value as a variable

const EditNote = (props) => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });

	if (loading)
		// if the data is loading, display a loading message

		return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error! Note not found</p>;

	return <Note note={data.note} />;
};

export default EditNote;
