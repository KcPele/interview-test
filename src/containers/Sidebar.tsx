import React from 'react'
import { SidebarContent } from '../compoents'

const Sidebar: React.FC = () => {
  return (
    <div className='py-7  max-w-side h-[820px]  w-[304px] hidden md:block border-r-[1px]'>
     <SidebarContent />
    </div>
  )
}

export default Sidebar