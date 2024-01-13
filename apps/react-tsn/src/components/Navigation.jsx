import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
	return (
		<>
			<nav>
				<ul>
					<Link to="/home">
						<span aria-hidden="true" role="img">
							🏠
						</span>
						Home
					</Link>
				</ul>
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
			</nav>
			<Outlet />
		</>
	);
};

export default Navigation;
