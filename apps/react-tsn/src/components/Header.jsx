import React from "react";
// new dependencies
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../img/logo.png";
import { isLoggedInVar } from "../app/cache";

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

const Header = () => {
	return (
		<HeaderBar>
			<img src={logo} alt="NoteWork Logo" height="40" />
			<span>&nbsp;&nbsp;</span>
			<LogoText>The Social NoteWork</LogoText>
		</HeaderBar>
	);
};

export default Header;
