// import React and routing dependencies
import React from 'react';
import {Route, Routes} from 'react-router-dom';
// import ProtectedRoute component
import ProtectedRoute from '../components/ProtectedRoute';
// import cache
import {isLoggedInVar} from '../app/cache';
// import shared layout component
import Layout from '../components/Layout';

// import routes
import Home from './home';
import MyNotes from './mynotes';
import Favorites from './favorites';
import NotePage from './note';
import SignUp from './signup';
import SignIn from './signin';
import NewNote from './new';
import EditNote from './edit';
import EmailVerify from '../components/EmailVerify';

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
				<Route
					path="/mynotes/*"
					element={
						<ProtectedRoute isAllowed={isLoggedInVar()} redirectTo="/signin">
							<MyNotes />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/favorites/*"
					element={
						<ProtectedRoute isAllowed={isLoggedInVar()} redirectTo="/signin">
							<Favorites />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/new/*"
					element={
						<ProtectedRoute isAllowed={isLoggedInVar()} redirectTo="/signin">
							<NewNote />
						</ProtectedRoute>
					}
				/>
				<Route
					path="/edit/:id/*"
					element={
						<ProtectedRoute isAllowed={isLoggedInVar()} redirectTo="/signin">
							<EditNote />
						</ProtectedRoute>
					}
				/>
				<Route path="/note/:id" element={<NotePage />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/:id/verify/:token" element={<EmailVerify />} />
			</Routes>
		</Layout>
	);
};

export default Pages;
