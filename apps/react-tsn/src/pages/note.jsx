import React from "react";
import { useParams } from "react-router-dom";

const NotePage = (props) => {
	const { id } = useParams();
	return (
		<>
			<div>{id}</div>
		</>
	);
};

export default NotePage;
