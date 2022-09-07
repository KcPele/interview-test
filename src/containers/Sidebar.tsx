import React from 'react'
import { SidebarContent } from '../compoents'

const Sidebar: React.FC = () => {
  return (
    <div className='py-7  max-w-side  w-[304px] hidden md:block border-r-2'>
     <SidebarContent />
    </div>
  )
}

export default Sidebar