import React, { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";

import { isLoggedInVar } from "../app/cache";
import { SIGNIN_USER } from "../gql/mutation";

const SignIn = (props) => {
	useEffect(() => {
		// update the document title
		document.title = "Sign In — NoteWork";
	});

	const navigate = useNavigate();
	const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
		onCompleted: (data) => {
			// store the token
			localStorage.setItem("token", data.signIn);
			console.log(data.signIn);
			// Update the local cache
			isLoggedInVar(true);
			// redirect the user to the homepage
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
