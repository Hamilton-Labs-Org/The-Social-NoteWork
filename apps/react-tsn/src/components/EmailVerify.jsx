import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import success from '../img/success.png';

const GreenBtn = styled.h1`
	border: none;
	outline: none;
	padding: 12px 0;
	background-color: #3bb19b;
	border-radius: 20px;
	width: 180px;
	font-weight: bold;
	font-size: 14px;
	cursor: pointer;
`;

const EmailVerify = () => {
	const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:4000/api/users/${param.id}/verify/${param.token}`;
				const {data} = await axios.get(url);
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
				<div>
					<img src={success} alt="success_img" />
					<h1>Email verified successfully</h1>
					<Link to="/login">
						<GreenBtn>Login</GreenBtn>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</>
	);
};

export default EmailVerify;
