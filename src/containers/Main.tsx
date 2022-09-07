import React from 'react'
import {DoughtnutGraph, Header, LineGraph, Navbar} from '../compoents'
import data from '../assests/data'

const Main:React.FC = () => {
   
  return (
    <div className='pl-[50px] md:px-[50px] md:w-[80%] w-[100%]'>
       <Navbar />
        <Header />
        <LineGraph />
        <div className='flex mt-3 gap-3 flex-col lg:flex-row'>
          <DoughtnutGraph pieData={data.top_locations} title="Top Location" />
          <DoughtnutGraph pieData={data.top_sources} title="Top Referral source" />
        </div>
    </div>
  )
}

export default Main