import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav` padding: 1em; background: #f5f4f0;
      @media (max-width: 700px) {
        padding-top: 64px;
}
      @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
} `;
const NavList = styled.ul` margin: 0;
padding: 0;
list-style: none; line-height: 2;
/* We can nest styles in styled-components */
/* The following styles will apply to links within the NavList component */ a{
        text-decoration: none;
        font-weight: bold;
        font-size: 1.1em;
        color: #333;
}
      a:visited {
        color: #333;
}
      a:hover,
      a:focus {
        color: #0077cc;
      }
`;

const Navigation = () => {
	return (
		<>
			<Nav>
				<NavList>
					<Link to="/home">
						<span aria-hidden="true" role="img">
							🏠
						</span>
						Home
					</Link>
				</NavList>
				<ul>
					<Link to="/mynotes">
						<span aria-hidden="true" role="img">
							📓
						</span>
						My Notes
					</Link>
				</ul>
				<ul>
					<Link to="/favorites">
						<span aria-hidden="true" role="img">
							⭐️
						</span>
						Favorites
					</Link>
				</ul>
			</Nav>
			<Outlet />
		</>
	);
};

export default Navigation;
