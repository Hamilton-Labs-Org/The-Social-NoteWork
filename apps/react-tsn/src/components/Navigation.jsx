import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav` 
padding: 1em; 
// background: #f5f4f0;
background: #415A77;

      @media (max-width: 700px) {
        padding-top: 64px;
}
      @media (min-width: 700px) {
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
} 
`;
const NavList = styled.ul` 
margin: 0;
padding: 0;
list-style: none; 
line-height: 2;


/* We can nest styles in styled-components */
/* The following styles will apply to links within the NavList component */ 

a {
	text-decoration: none;
	font-weight: bold;
	font-size: 1.1em;

	color: white;
	color: #333;
	color: #E0E1DD;
}
a:visited {
	color: #333;
	color: #E5E5E5;
}
a:hover{
	color: #0077cc;
}
a:focus {
	// color: #778DA9;
	color: #fca311;

}
`;

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavList>
          <li>
            <Link to="/">
              <span aria-hidden="true" role="img">
								🏠
              </span>
              <span>&nbsp;</span>
							Home
            </Link>
          </li>
          <li>
            <Link to="/new">
              <span aria-hidden="true" role="img">
								📝
              </span>
              <span>&nbsp;</span>
							New Note
            </Link>
          </li>
          <li>
            <Link to="/mynotes">
              <span aria-hidden="true" role="img">
								📓
              </span>
              <span>&nbsp;</span>
							My Notes
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <span aria-hidden="true" role="img">
								⭐️
              </span>
              <span>&nbsp;</span>
							Favorites
            </Link>
          </li>
        </NavList>
      </Nav>
      <Outlet />
    </>
  );
};

export default Navigation;
