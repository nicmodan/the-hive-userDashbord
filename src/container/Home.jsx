import React, { useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PERSONAL_INFO } from '../components/forms_component/PERSONAL_INFO';
import { FormProvider } from '../context/FormContext';
import { FormReducer } from '../reducer/FormReducer';

import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';

const Home = () => {
	// link form to reducers
	const [user, dispatch] = useReducer(FormReducer, PERSONAL_INFO);

	const handleChange = (e) => {
		dispatch({
			type: 'HANDLE TEXT INPUT',
			field: e.target.name,
			payload: e.target.value,
		});
	};

	return (
		<>
		{/* <div>
			<NavBar />
		</div> */}
		
		<div className='flex  bg-gray-100 md:flex-row flex-col h-screen relative'>
			<FormProvider value={{ user, handleChange }}>
				<div className='hidden md:flex h-screen flex-initial'>
					<Sidebar />
				</div>
				<div className='flex-1 h-screen overflow-y-scroll'>
					<Routes>
						<Route
							path='/*'
							element={<Dashboard />}
						/>
					</Routes>
				</div>
			</FormProvider>
		</div>
		</>
	);
};

export default Home;
