import React from 'react'
import {DoughtnutGraph, Header, LineGraph, Navbar} from '../compoents'
import data from '../assests/data'

const Main:React.FC = () => {
   
  return (
    <div className='px-[50px] md:w-[80%] w-full'>
       <Navbar />
        <Header />
        <LineGraph />
        <div className='flex mt-3 gap-3'>
          <DoughtnutGraph pieData={data.top_locations} title="Top Location" />
          <DoughtnutGraph pieData={data.top_sources} title="Top Referral source" />
        </div>
    </div>
  )
}

export default Main