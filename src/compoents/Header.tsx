import React from 'react'

const Header = () => {
  return (
    <div className='mt-5'>
        <h1 className='mb-2 text-[24px]'>Good morning, Blessing ⛅️ </h1>
        <p className='text-sm mb-5'>Check out your dashboard summary.</p>
        <div className='flex gap-3'>
            <p className='border-[1px] px-3 py-2 text-center rounded-full border-gray-200' >1 Day</p>
            <p className='border-[1px] px-3 py-2 text-center rounded-full border-gray-200' >3 Days</p>
            <p className='border-[1px] px-3 py-2 text-center rounded-full border-gray-200' >7 Days</p>
            <p className='border-[1px] px-3 py-2 text-center rounded-full border-gray-200' >30 Days</p>
            <p className='border-[1px] px-3 py-2 text-center rounded-full border-orange-500 bg-orange-100 text-orange-500' >All Time</p>
            <p className='border-[1px] px-3 py-2 text-center rounded-full border-gray-200' >Cutom Date</p>
        </div>
    </div>
  )
}

export default Header