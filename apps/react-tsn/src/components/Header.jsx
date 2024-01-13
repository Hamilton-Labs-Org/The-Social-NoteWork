import React from "react";
import logo from "../img/logo.svg";

const Header = () => {
	return (
		<>
			<header>
				<img src={logo} alt="NoteWork Logo" height="40" />
				<h1>The Social NoteWork</h1>
			</header>
		</>
	);
};

export default Header;
