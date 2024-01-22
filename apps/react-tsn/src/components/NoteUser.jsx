import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
const NoteUser = (props) => {
	return <Link to={`/edit/${props.note.id}`}>Edit</Link>;
};
export default NoteUser;
