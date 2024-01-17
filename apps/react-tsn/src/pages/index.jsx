// import React and routing dependencies
import React from "react";
import { Route, Routes } from "react-router-dom";

// import shared layout component
import Layout from "../components/Layout";

// import routes
import Home from "./home";
import MyNotes from "./mynotes";
import Favorites from "./favorites";
import NotePage from "./note";
import SignUp from "./signup";

// define routes and export the module
const Pages = () => {
	return (
		<Layout>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/mynotes" element={<MyNotes />} />
				<Route path="/favorites" element={<Favorites />} />
				<Route path="/note/:id" element={<NotePage />} />
				<Route path="/signup" element={<SignUp />} />
			</Routes>
		</Layout>
	);
};

export default Pages;
