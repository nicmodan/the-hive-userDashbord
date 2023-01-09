import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './container/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

import { GoogleOAuthProvider } from '@react-oauth/google';

// IMPORT REDUX STORE

import { useSelector, useDispatch } from 'react-redux';
import { inistalizeNote } from './reducer/thehivecatlogreducer';


const App = () => {
  const newState = useSelector(state=>state.catlog)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(inistalizeNote())
    console.log(newState)

  }, [])

	return (
   

      <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_API_TOKEN}`}>
          <Routes>
            <Route
              path='login'
              element={<Login />}
            />
            <Route
              path='signup'
              element={<SignUp />}
            />
            <Route
              path='/*'
              element={<Home />}
            />
          </Routes>
      </GoogleOAuthProvider>

    // </Provider>

	);
};

export default App;
