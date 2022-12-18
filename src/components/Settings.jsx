import React from 'react'
import './settings.css'

import { Password, Profile, Paypal, Payonner, twoFactorAuth, ConnectedAccounts } from '../components/forms_component'

const Settings = () => {

  const handleChange = (e) => {
      e.preventDefault()
  }
  return (
    <div className='w-full'>
      <div className='flex justify-end items-center h-8 bg-white w-full p-10'>
          <button type='button' className='bg-black text-xs p-2 text-white'>Start Creating</button>
      </div>

      {/* FORMS */}
      <div className='px-14 py-8'>
        <form>
          <div className=' text-black text-xs'>
            <h3 className='text-lg font-semibold'>Profile</h3>
            <div className='bg-white p-2'>

            <Profile handleChange={handleChange}/>
            <button className='bg-black text-xs px-6 py-2 text-white'>Update Info</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Settings