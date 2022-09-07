import React from 'react'

import { RiPencilLine} from 'react-icons/ri'
import { AiOutlineHourglass } from 'react-icons/ai'
import {MdOutlineDashboard, MdOutlineDeleteOutline,MdOutlineMoreHoriz,  MdOutlineSubscriptions, MdOutlineFilePresent, MdOutlineGroup, MdOutlineAlarm} from 'react-icons/md'
import {TbCameraPlus} from 'react-icons/tb'
import {profile} from '../assests'
const SidebarContent: React.FC = () => {
  return (
    <div className='min-h-[100vh]'>
        <div className='mx-[60px] mb-9'>Logo</div>
        <div >
            <h3 className='pl-[60px] mb-5 flex items-center gap-4 border-l-4 border-l-orange-500 text-orange-500'><MdOutlineDashboard /> Dashboard</h3>
            <ul className='pl-[60px]'>
                <li className=' mb-4 flex items-center gap-4 '><RiPencilLine /> Item 1</li>
                <li className=' mb-4 flex items-center gap-4 '><MdOutlineGroup /> Item 2</li>
                <li className=' mb-4 flex items-center gap-4 '><AiOutlineHourglass /> Item 3</li>
            </ul>
        </div>
        <div className='ml-[60px]'>
            <h3 className=' mb-5'>OTHERS 1</h3>
            <ul className=''>
                <li className=' mb-4 flex items-center gap-4 '><TbCameraPlus /> Item 4</li>
                <li className=' mb-4 flex items-center gap-4 '><MdOutlineDeleteOutline /> Item 5</li>
            </ul>
        </div>
        <div className='ml-[60px]'>
            <h3 className=' mb-5'>OTHERS 2</h3>
            <ul className=''>
                <li className=' mb-4 flex items-center gap-4 '><MdOutlineSubscriptions /> Item 6</li>
                <li className=' mb-4 flex items-center gap-4 '><MdOutlineFilePresent /> Item 7</li>
                <li className=' mb-4 flex items-center gap-4 '><MdOutlineAlarm /> Item 8</li>
            </ul>
        </div>

        <div className='lg:ml-[50px] ml-[30px] md:mt-[160px] mt-[120px] mr-[10px] flex items-center justify-between'>
            <div className='flex items-center gap-3'><img src={profile} className='rounded-full' alt="blessing profile" /> <p>Blessing Daniels</p></div>
            <MdOutlineMoreHoriz />
        </div>
    </div>
  )
}

export default SidebarContent