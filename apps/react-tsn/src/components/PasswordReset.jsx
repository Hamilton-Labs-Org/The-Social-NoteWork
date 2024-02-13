import {useState} from 'react';
import {useParams} from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';

const Wrapper = styled.div`
	border: 1px solid #fca311;
	max-width: 500px;
	padding: 1em;
	margin: 0 auto;
	margin-top: 10%;
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

const GreenBtn = styled.button`
	border: outline 1px #fca311;
	// outline: none;
	padding: 12px 0;
	// background-color: #3bb19b;
	background-color: #04aa6d;
	// background-color: #fca311;
	border-radius: 20px;
	width: 180px;
	font-weight: bold;
	// font-size: 14px;
	font-size: 1.1em;
	cursor: pointer;
	color: #e5e5e5;

	@media (max-width: 700px) {
		width: 100px;
		font-size: 14px;
	}
`;

const Container = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	img {
			border-radius: 50%;
			width: -50%;
		}
	@media (max-width: 700px) {
		padding-top: .03%;
	}
	@media (min-width: 700px) {
		position: 
		width: 100px;
		display: flex;
		height: calc(100% - 7%);
		overflow-y: scroll;
		align-items: center;
		img {
			border-radius: 50%;
			
		}
	justify-content: center;
	margin: 0 auto;
	flex-direction: column;
	font-size: 1.1em;
	}
`;

const PasswordReset = () => {
	// set the default state of the form
	const [values, setValues] = useState();
	// update the state when a user types in the form
	const onChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	const [validUrl, setValidUrl] = useState('');
	const param = useParams();
	// useEffect(() => {
	// 	const passwordResetUrl = async () => {
	// 		try {
	// 			const url = `http://localhost:4000/${param.id}/reset/${param.token}`;
	// 			const options = {
	// 				method: 'GET',
	// 				url: url,
	// 				headers: {
	// 					'content-type': [
	// 						'application/json',
	// 						'application/x-www-form-urlencoded',
	// 					],
	// 					// csrfPrevention: 'false',
	// 					// 'Apollo-Require-Preflight': 'true',
	// 					// Authoriaztion: 'Bearer ${token}',
	// 				},
	// 			};
	// 			const data = await axios(options);

	// 			console.log(data);
	// 			if (data) {
	// 				setValidUrl(true);
	// 			}
	// 		} catch (error) {
	// 			console.log(error);
	// 			setValidUrl(false);
	// 		}
	// 	};
	// 	passwordResetUrl();
	// }, [param]);

	return (
		<>
			<Wrapper>
				<h2>Reset Password</h2>
				<Form>
					<>
						<label htmlFor="username">Username:</label>
						<input
							required
							type="text"
							id="username"
							name="username"
							placeholder="username"
							onChange={onChange}
						/>
					</>
					<label htmlFor="email">Email:</label>
					<input
						required
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						onChange={onChange}
					/>
					<Button type="submit">Submit</Button>
				</Form>
			</Wrapper>
			{/* {validUrl ? (
        <Container>
          <h1>Reset password</h1>
          <h2>Enter your new password.</h2>
          <Link to="/signin">
            <GreenBtn>Sign In</GreenBtn>
          </Link>
        </Container>
      ) : (
        <div>
          <h1>404 Not Found</h1>
          <p></p>
          <h2>Please Try again.</h2>
        </div>
      )} */}
		</>
	);
};

export default PasswordReset;
