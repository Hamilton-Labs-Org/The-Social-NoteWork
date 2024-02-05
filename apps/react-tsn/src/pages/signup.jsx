import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import UserForm from '../components/UserForm';
import {isLoggedInVar} from '../app/cache';
import {SIGNUP_USER} from '../gql/mutation';

function refreshPage() {
	setTimeout(() => {
		window.location.reload(false);
	}, 35);
	console.log('page to reload');
}

const SignUp = (props) => {
	useEffect(() => {
		// update the document title
		document.title = 'Sign Up — NoteWork';
	});

	const navigate = useNavigate();

	//add the mutation hook
	const [signUp, {loading, error}] = useMutation(SIGNUP_USER, {
		onCompleted: (data) => {
			refreshPage();
			//collect the garbage
			// client.cache.gc();
			//remove the token and everything in local storage
			localStorage.clear();
			//change isLoggedIn to false
			isLoggedInVar(false);
			navigate('/');
			// console.log the JSON Web Token when the mutation is complete
			// localStorage.setItem('token', data.signUp);
			// isLoggedInVar(true);
			// redirect the user to the homepage
			// props.history.push("/");
		},
	});

	if (loading) return <p>Loading</p>;
	if (error) {
		console.log(JSON.stringify(error));
		return <p>An error occurred</p>;
	}

	return (
		<>
			<UserForm action={signUp} formType="signup" />
			{/* if the data is loading, display a loading message*/}
			{loading && <p>Loading...</p>}
			{/* if there is an error, display a error message*/}{' '}
			{error && <p>Error creating an account!</p>}
		</>
	);
};

export default SignUp;
