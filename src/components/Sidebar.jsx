import React from 'react'
import { AiOutlineVerticalAlignBottom } from 'react-icons/ai'
import { IoLayersOutline } from 'react-icons/io5'
import { sideBarData } from '../sideBarData'
import { Content } from './SidebarContent'
import { IoMdSettings } from 'react-icons/io'

export const Sidebar = () => {


  return (
    <div className='w-full h-full flex border shadow-lg flex-col '>
        <div className='h-[9%] flex px-5 mt-1 justify-between content-center'>
            <div className='flex justify-center content-center'>
                <p className='mt-2 text-5xl font-thin content-center'><IoLayersOutline/></p>
                <p className='text-xl content-center font-medium tracking-wide'>ENBUILD</p>
            </div>
            <div className='justify-center content-center'>
                <AiOutlineVerticalAlignBottom className='rotate-[90deg] text-2xl'/>
            </div>
        </div>

        <div className='p-5 flex flex-col gap-y-5 h-full '>
            {
                sideBarData.map((content)=>(
                        <Content key={content.id} content={content}/>
                    )
                )
            }

            <div className='content-end h-screen mb-12'>
                <div className="flex gap-x-2 text-[17px] my-auto font-medium">
                    <p className='p-1'><IoMdSettings/></p>
                    <p className=''>Settings</p>
                </div>
            </div>
        </div>

        
    </div>
  )
}
