import React, {useState, useEffect } from 'react'
import {DoughtnutGraph, Header, LineGraph, Navbar} from '../components'
import { countyIcons, companyIcons } from '../assests'
import { ITopLocations, ITopSources } from '../models'
import useFetch from '../hooks/useFetch'

const Main:React.FC = () => {
  const { getData } = useFetch()
    const [location, setLocation] = useState<ITopLocations[]>([])
    const [source, setSource] = useState<ITopSources[]>([])

    useEffect(() => {
       getData()
       .then(data => {
        setLocation(data.top_locations)
        setSource(data.top_sources)
       })
    }, [])
   
  return (
    <div className='px-4 mb-3 sm:px-9 md:px-[50px] md:w-[80%] w-[100%]'>
       <Navbar />
        <Header />
        <LineGraph />
        <div className='flex mt-3 gap-3 flex-col lg:flex-row'>
          <DoughtnutGraph pieData={location} icons={countyIcons} title="Top Location" />
          <DoughtnutGraph pieData={source} icons={companyIcons} title="Top Referral source" />
        </div>
    </div>
  )
}

export default Main