import React, { useReducer, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PERSONAL_INFO } from '../components/forms_component/PERSONAL_INFO';
import { FormProvider } from '../context/FormContext';
import { FormReducer } from '../reducer/FormReducer';
import React, {useState} from 'react'


import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';

// IMPORTING MERGINES
import SideMenuBar from '../user/SideMenuBar'



const Home = () => {
    
    const [mobileCheck, setMobilCheck] = useState(true)
	  const [user, dispatch] = useReducer(FormReducer, PERSONAL_INFO);
    
    const mobileHandler = (condition)=>{
        setMobilCheck(condition)
    }
    const handleChange = (e) => {
      dispatch({
        type: 'HANDLE TEXT INPUT',
        field: e.target.name,
        payload: e.target.value,
      });
    };
    
    return (
        <div className='flex bg-gray-100 md:flex-row flex-col h-screen relative'>
            <div className='hidden md:flex h-screen flex-initial'>
                {/* <Sidebar /> */}
                <SideMenuBar mobileCheck={mobileHandler} />
            </div>
            <div className='flex-1 h-screen overflow-y-scroll'>
                <Routes>
                    <Route 
                        path='/*'
                        element={<Dashboard mobileCheck={mobileCheck} />}
                    />
                </Routes>
            </div>
        </div>
	
	);
};

export default Home;

