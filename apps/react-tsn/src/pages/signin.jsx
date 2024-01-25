import React, { useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";

import { isLoggedInVar } from "../app/cache";
import { SIGNIN_USER } from "../gql/mutation";
import { GET_ME } from "../gql/query";
function refreshPage() {
	setTimeout(() => {
		window.location.reload(false);
	}, 35);
	console.log("page to reload");
}

const SignIn = (props) => {
	useEffect(() => {
		// update the document title
		document.title = "Sign In — NoteWork";
	});

	const navigate = useNavigate();
	const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
		onCompleted: (data) => {
			refreshPage();
			//remove the token and everything in local storage
			localStorage.clear();
			// store the token
			localStorage.setItem("token", data.signIn);
			// Update the local cache
			isLoggedInVar(true);
			// redirect the user to the homepage
			navigate("/");
		},
	});
	const { data } = useQuery(GET_ME, {
		onCompleted: (data) => {
			const user = data.me.username;
			localStorage.setItem("username", user);
			navigate("/");
		},
	});
	return (
		<>
			<UserForm action={signIn} formType="signIn" />
			{/* if the data is loading, display a loading message*/}{" "}
			{loading && <p>Loading...</p>}
			{/* if there is an error, display a error message*/}{" "}
			{error && <p>Error signing in!</p>}
		</>
	);
};

export default SignIn;
