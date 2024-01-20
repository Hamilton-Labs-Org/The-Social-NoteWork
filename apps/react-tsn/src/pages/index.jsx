// import React and routing dependencies
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

// import ProtectedRoute component
import ProtectedRoute from "../components/ProtectedRoute";

// import cache
import { isLoggedInVar } from "../app/cache";

// import shared layout component
import Layout from "../components/Layout";

// import routes
import Home from "./home";
import MyNotes from "./mynotes";
import Favorites from "./favorites";
import NotePage from "./note";
import SignUp from "./signup";
import SignIn from "./signin";
import { Component } from "react";

const IS_LOGGED_IN = gql` {
        isLoggedIn @client
      }
`;

// define routes and export the module
const Pages = () => {
	return (
		<Layout>
			<Routes>
				<Route
					exact
					path="/*"
					element={
						<ProtectedRoute isAllowed={isLoggedInVar()} redirectTo="/signin">
							<Home />
						</ProtectedRoute>
					}
				/>
				{/* <Route
					path="/mynotes/*"
					element={
						<PrivateRoute redirectTo="/signin">
							<MyNotes />
						</PrivateRoute>
					}
				/> */}
				<Route
					path="/favorites/*"
					element={
						<PrivateRoute redirectTo="/signin">
							<Favorites />
						</PrivateRoute>
					}
				/>
				<Route path="/note/:id" element={<NotePage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</Layout>
	);
};

// add the PrivateRoute component below our `Pages` component
const PrivateRoute = ({ element, ...rest }) => {
	const { loading, error, data } = useQuery(IS_LOGGED_IN); // if the data is loading, display a loading message
	if (loading) return <p>Loading...</p>;
	// if there is an error fetching the data, display an error message
	if (error) return <p>Error!</p>;
	// if the user is logged in, route them to the requested component // else redirect them to the sign-in page
	return (
		<Routes>
			<Route
				{...element}
				render={(props) =>
					data.isLoggedIn === true ? (
						<Component {...element} />
					) : (
						<Navigate to="/signin" />
					)
				}
			/>
		</Routes>
	);
};

export default Pages;
