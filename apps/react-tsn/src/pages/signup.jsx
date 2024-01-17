import React, { useEffect, useState } from "react";
// include the props passed to the component for later use
import styled from "styled-components";
import Button from "../components/Button";

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

	return (
		<>
			<div>
				<p>Sign Up</p>
			</div>
			<Wrapper>
				<h2>Sign Up</h2>
				<Form>
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
					<button type="submit">Submit</button>
				</Form>
			</Wrapper>
		</>
	);
};
export default SignUp;
