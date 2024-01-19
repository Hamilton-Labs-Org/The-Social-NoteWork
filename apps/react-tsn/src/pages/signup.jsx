import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// include the props passed to the component for later use
import { useMutation, useApolloClient, gql } from "@apollo/client";
import styled from "styled-components";
import Button from "../components/Button";
import { token } from "morgan";

const Wrapper = styled.div` 
border: 1px solid #fca311; 
max-width: 500px; 
padding: 1em;
      margin: 0 auto;
    `;

const Form = styled.form` 
		label,
      input {
        display: block;
        line-height: 2em;
}
input {
    width: 100%;
    margin-bottom: 1em;
} 
`;

const SIGNUP_USER = gql`
mutation signUp($email: String!, $username: String!, $password: String!) {
        signUp(email: $email, username: $username, password: $password)
      }
`;

const SignUp = (props) => {
	useEffect(() => {
		// update the document title
		document.title = "Sign Up — NoteWork";
	});

	// set the default state of the form
	const [values, setValues] = useState();

	// update the state when a user types in the form
	const onChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	const navigate = useNavigate();

	// Apollo Client
	const client = useApolloClient();

	//add the mutation hook
	const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
		onCompleted: (data) => {
			// console.log the JSON Web Token when the mutation is complete
			console.log(data.signUp);
			localStorage.setItem("token", data.signUp);
			// update the local cache
			client.writeData({ data: { isLoggedIn: true } });
			// redirect the user to the homepage
			// props.history.push("/");
			navigate("/");
		},
	});

	return (
		<Wrapper>
			<h2>Sign Up</h2>
			<Form
				onSubmit={(event) => {
					event.preventDefault();
					signUp({
						variables: {
							...values,
						},
					});
					console.log(values);
				}}
			>
				<label htmlFor="username">Username:</label>
				<input
					required
					type="text"
					id="username"
					name="username"
					placeholder="username"
					onChange={onChange}
				/>
				<label htmlFor="email">Email:</label>
				<input
					required
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					onChange={onChange}
				/>
				<label htmlFor="password">Password:</label>
				<input
					required
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					onChange={onChange}
				/>
				<Button type="submit">Submit</Button>
			</Form>
		</Wrapper>
	);
};

export default SignUp;
