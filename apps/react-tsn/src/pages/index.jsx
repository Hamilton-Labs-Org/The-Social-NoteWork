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
import ResetPassword from '../components/PasswordReset';
import PasswordReset from '../components/PasswordReset';

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
				<Route path="/reset" element={<ResetPassword />} />
				<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
				<Route path="/users/:id/reset/:token" element={<PasswordReset />} />
			</Routes>
		</Layout>
	);
};

export default Pages;
