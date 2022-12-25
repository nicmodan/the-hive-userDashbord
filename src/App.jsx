import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import Login from './components/Login';

import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
	return (
		<GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_API_TOKEN}`}>
			<Routes>
				<Route
					path='login'
					element={<Login />}
				/>
				<Route
					path='/*'
					element={<Home />}
				/>
			</Routes>
		</GoogleOAuthProvider>
	);
};

export default App;
