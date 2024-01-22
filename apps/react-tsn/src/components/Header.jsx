import React from "react";
// new dependencies
import { useApolloClient, gql, useQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { isLoggedInVar } from "../app/cache";
import ButtonAsLink from "./ButtonAsLink";

const HeaderBar = styled.header` 
	width: 100%;
	padding: 0.5em 1em;
	display: flex;
	height: 64px;
	position: fixed;
	align-items: center;

	// background-color: #fff;
	background-color: #0D1B2A;
	color: #E5E5E5;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
	z-index: 1;
`;

const LogoText = styled.h1` 
margin: 0;
padding: 0;
display: inline;
`;

const UserState = styled.div` 
margin-left: auto;
`;

const Header = (props) => {
	const client = new useApolloClient();
	// query hook for user logged in state
	const navigate = useNavigate();
	return (
		<HeaderBar>
			<img src={logo} alt="NoteWork Logo" height="40" />
			<span>&nbsp;&nbsp;</span>
			<LogoText>The Social NoteWork</LogoText>
			<UserState>
				{isLoggedInVar() ? (
					<ButtonAsLink
						onClick={() => {
							//collect the garbage
							client.cache.gc();
							//remove the token and everything in local storage
							localStorage.clear();
							// clear the app cache
							client.resetStore();
							//change isLoggedIn to false
							isLoggedInVar(false);
							// navigate to homepage
							navigate("/signin");
						}}
					>
						Logout
					</ButtonAsLink>
				) : (
					<p>
						<Link to={"/signin"}>Sign In</Link> or{" "}
						<Link to={"/signup"}>Sign Up</Link>
					</p>
				)}
			</UserState>
		</HeaderBar>
	);
};

export default Header;
