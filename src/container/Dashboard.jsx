import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Payment from '../components/Payment'
import Settings from '../components/Settings'
import Upgrade from '../components/Upgrade'
import Stores from '../components/Stores'
const Dashboard = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Routes>
        <Route path='/' element={<Upgrade />} />
        <Route path='/payments' element={<Payment />} />
        <Route path='/stores' element={<Stores />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  )
}

export default Dashboard