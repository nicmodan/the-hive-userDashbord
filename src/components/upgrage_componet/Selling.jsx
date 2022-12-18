import React from 'react'
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import CardThree from './CardThree';


const Selling = () => {
  return (
    <div className='animate-fade-in w-full mt-5 flex flex-col justify-center items-center'>
    <div className='w-full'>
        <CardOne />
    </div>

    <div className='flex flex-col md:flex-row mt-8 gap-8 h-full justify-between items-stretch'>
        <div className='w-full md:w-1/2'>
            <CardTwo />
        </div>
        <div className='w-full md:w-1/2'>
            <CardThree />
        </div>
    </div>
</div>
  )
}

export default Selling