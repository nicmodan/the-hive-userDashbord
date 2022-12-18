import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'
const Home = () => {
  return (
    <div className='flex bg-gray-100 md:flex-row flex-col h-screen'>
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
    </div>


  )
}

export default Home