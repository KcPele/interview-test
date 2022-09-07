import React, { useState} from 'react'

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import SidebarContent from './SidebarContent';
const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <div className='py-4  md:w-fit w-screen  flex justify-start gap-6 items-center'>
        <div className='md:hidden '>
        <HiMenuAlt4 size={24} onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
           className='absolute py-7 flex min-w-[304px] w-[304px] top-0 bg-white left-[-299px]'
            whileInView={{ x: [0, 300] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
             <SidebarContent />
           <HiX size={24}  onClick={() => setToggle(false)} />
           
            
          </motion.div>
        )}
        </div>
        <h1>Dasboard</h1>
       
    </div>
  )
}

export default Navbar