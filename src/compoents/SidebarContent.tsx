import React from 'react'

import { RiPencilLine} from 'react-icons/ri'
import { AiOutlineHourglass } from 'react-icons/ai'
import {MdOutlineDashboard, MdOutlineDeleteOutline,MdOutlineMoreHoriz,  MdOutlineSubscriptions, MdOutlineFilePresent, MdOutlineGroup, MdOutlineAlarm} from 'react-icons/md'
import {TbCameraPlus} from 'react-icons/tb'
import {profile, logo} from '../assests'
const SidebarContent: React.FC = () => {
    const itemsStyle = 'pl-[60px] mb-4 text-[#4D5760] flex items-center gap-4 hover:border-l-[0.24rem] hover:border-l-orange-500 hover:text-orange-500 cursor-pointer'
  return (
    <div className='min-h-[100vh] pr-2 ml-0 font-medium '>
        <div className='mx-[60px] mb-9'><img src={logo} alt="mainstack logo"/></div>
        <div >
            <h3 className='pl-[60px] mb-5 flex items-center gap-4 border-l-[0.24rem]  border-l-orange-500 text-orange-500 cursor-pointer'><MdOutlineDashboard /> Dashboard</h3>
            <ul className=''>
                <li className={`${itemsStyle} `}><RiPencilLine /> Item 1</li>
                <li className={`${itemsStyle} `}><MdOutlineGroup /> Item 2</li>
                <li className={`${itemsStyle} `}><AiOutlineHourglass /> Item 3</li>
            </ul>
        </div>
        <div className=''>
            <h3 className='pl-[60px] mb-5 text-[#4D5760]'>OTHERS 1</h3>
            <ul className=''>
                <li className={`${itemsStyle} `}><TbCameraPlus /> Item 4</li>
                <li className={`${itemsStyle} `}><MdOutlineDeleteOutline /> Item 5</li>
            </ul>
        </div>
        <div className=''>
            <h3 className='pl-[60px] mb-5 text-[#4D5760]'>OTHERS 2</h3>
            <ul className=''>
                <li className={`${itemsStyle} `}><MdOutlineSubscriptions /> Item 6</li>
                <li className={`${itemsStyle} `}><MdOutlineFilePresent /> Item 7</li>
                <li className={`${itemsStyle} `}><MdOutlineAlarm /> Item 8</li>
            </ul>
        </div>

        <div className='lg:ml-[50px] ml-[30px] md:mt-[160px] mt-[120px] text-[#4D5760] w-[100%] md:w-auto flex items-center justify-between'>
            <div className='flex items-center gap-3'><img src={profile} className='rounded-full' alt="blessing profile" /> <p>Blessing Daniels</p></div>
            <MdOutlineMoreHoriz className='cursor-pointer' />
        </div>
    </div>
  )
}

export default SidebarContent