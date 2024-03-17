import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import UserForm from '../components/UserForm';
import {RESET_PASSWORD} from '../gql/mutation';

function refreshPage() {
	setTimeout(() => {
		window.location.reload(false);
	}, 35);
	console.log('page to reload');
}

const ResetPassword = (props) => {
	useEffect(() => {
		// update the document title
		document.title = 'Reset Password — NoteWork';
	});

	const navigate = useNavigate();

	// add the mutation hook
	const [resetPassword, {loading, error}] = useMutation(RESET_PASSWORD, {
		onCompleted: (data) => {
			// collect the garbage
			// client.cache.gc();
			// remove the token and everything in local storage
			localStorage.clear();
			// change isLoggedIn to false
			isLoggedInVar(false);
			localStorage.setItem('token', data.resetPassword);
			navigate('/');
			// console.log the JSON Web Token when the mutation is complete
			// localStorage.setItem('token', data.signUp);
			// isLoggedInVar(true);
			// redirect the user to the homepage
			// props.history.push("/");
			console.log(data);
			refreshPage();
		},
	});

	return (
		<>
			<UserForm action={resetPassword} formType="reset" />
			{/* if the data is loading, display a loading message*/}
			{loading && <p>Loading...</p>}
			{/* if there is an error, display a error message*/}
			{error && <p>Error resetting your password!</p>}
		</>
	);
};

export default ResetPassword;
