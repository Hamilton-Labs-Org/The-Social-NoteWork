import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import success from '../img/success.png';

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

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:4200/users/${param.id}/verify/${param.token}`;
				const {data} = await axios({
					method: 'get',
					url: url,
					// headers: {
					// 	credentials: true,
					// 	fetchOptions: {
					// 		mode: 'no-cors',
					// 	},
					// },
				}).then((response) => {
					console.log(response);
				});
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<Container>
					<img src={success} alt="success_img" />
					<h1>Email verified!</h1>
					<Link to="/signin">
						<GreenBtn>Sign In</GreenBtn>
					</Link>
				</Container>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;
