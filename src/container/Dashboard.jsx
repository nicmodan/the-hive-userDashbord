import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Payment from '../components/Payment'
import Settings from '../components/Settings'
import Upgrade from '../components/Upgrade'
import Stores from '../components/Stores'
import "../user/user.css"

// IMPOKRT DASHBORD MERGES
import UserHome from "../user/dashbord"
import Muckup from '../user/muckup'


const Dashboard = (props) => {

  const {mobileCheck} = props
    
  // const mobileHandler = (condition)=>{
  //     setMobilCheck(condition)
  //   }
  return (
    <div className='min-h-screen bg-gray-100 overflow-y-hidden dashbord'>
      <Routes>
        <Route path='/' element={<UserHome  mobileCheck={mobileCheck} />} />
        <Route path='/Muckup' element={<Muckup />} />
        <Route path='/Upgrades' element={<Upgrade />} />
        <Route path='/payments' element={<Payment />} />
        <Route path='/create' element={<Create />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  )
}

export default Dashboard