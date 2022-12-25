import React, {useState} from 'react'

import { Routes, Route } from 'react-router-dom'

import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'

// IMPORTING MERGINES
import SideMenuBar from '../user/SideMenuBar'



const Home = () => {
    
    const [mobileCheck, setMobilCheck] = useState(true)

    const mobileHandler = (condition)=>{
        setMobilCheck(condition)
    }
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


    )
}

export default Home