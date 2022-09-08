import React from 'react'

const Header: React.FC = () => {
  const headerStyles = 'border-[1px] px-3 py-2 text-center rounded-full border-gray-200 hover:border-orange-500 hover:text-orange-500 cursor-pointer'
  return (
    <div className='mt-5'>
      <div className='flex items-center justify-between'>
        <div>
        <h1 className='mb-2 text-2xl font-bold'>Good morning, Blessing ⛅️ </h1>
        <p className='text-sm mb-5 font-medium text-[#31373D]'>Check out your dashboard summary.</p>
        </div>
        <a className='text-[#FF5403]' href='#view'>View analytics</a>
      </div>
        <div className='flex gap-3 flex-wrap text-[#31373D] font-semibold'>
            <p className={`${headerStyles}`} >1 Day</p>
            <p className={`${headerStyles}`} >3 Days</p>
            <p className={`${headerStyles}`} >7 Days</p>
            <p className={`${headerStyles}`} >30 Days</p>
            <p className='border-[1px] px-3 py-2 text-center rounded-full border-orange-500 bg-orange-100 text-orange-500 cursor-pointer'>All Time</p>
            <p className={`${headerStyles}`} >Cutom Date</p>
        </div>
    </div>
  )
}

export default Header