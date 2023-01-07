import React, {useEffect} from 'react'
// import use
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import Home from './container/Home'
import {inistalizeNote} from "./Service/user-Store"


const App = () => {

  const newState = useSelector(state=>state.user)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(inistalizeNote())
    // console.log(newState)

  })

  return (
    <Routes>
      { console.log(newState) }
      <Route path="/*" element={<Home />}/>
    </Routes>
  )
}

export default App