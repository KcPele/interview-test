import {DoughtnutGraph, Header, LineGraph, Navbar} from '../components'
import { countyIcons, companyIcons } from '../assests'
import useFetch from '../hooks/useFetch'


const Main = () => {
    const { data } = useFetch()
 
  return (
    <div className='px-4 mb-3 sm:px-9 md:px-[50px] md:w-[80%] w-[100%]'>
       <Navbar />
        <Header />
        <LineGraph />
        <div className='flex mt-3 gap-3 flex-col lg:flex-row'>
          {data && (
        <>
            <DoughtnutGraph pieData={data.top_locations} icons={countyIcons} title="Top Location" />
          <DoughtnutGraph pieData={data.top_sources} icons={companyIcons} title="Top Referral source" />
        </>
          )}
        </div>
    </div>
  )
}

export default Main