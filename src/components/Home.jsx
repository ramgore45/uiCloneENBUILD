import React, { useState } from 'react'
import { FaGithub, FaRegCircle, FaRegCircleDot } from 'react-icons/fa6'
import { Item } from './HomeItem.jsx'
import  { mainData }  from '../mainData.js'

export const Home = ({toggle, darkMode}) => {

  const [active,setActive] = useState(1)

  return (
    <div className='px-6 py-4 flex flex-col gap-y-5 top-20 bg-gray-50 dark:bg-neutral-700 dark:text-neutral-300 transition duration-300'>
      <div className='font-bold text-3xl'>
        Home
      </div>

      <p className='w-[50%] text-[15px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugiat beatae in, Lorem, ipsum ipsam fugit odio! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, unde?
      </p>

      <div className='flex gap-x-5 content-center ' >
        <p className='self-center text-[17px] font-normal'>Choose your VCS : </p>
        {/* First BTN */}
        <div className={`cursor-pointer flex  gap-x-3 justify-center content-center border border-solid bg-white dark:bg-neutral-900 transition duration-300 rounded-lg p-2 px-4 
                        ${active===1 ? " border-[3px] border-black dark:border-white" : "" }`}
          onClick={()=>setActive(1)}
        >
            <img className='h-5 self-center transition duration-300'
              src='https://seeklogo.com/images/G/gitlab-logo-FAA48EFD02-seeklogo.com.png'
            />
            <p className='content-center'>GitLab</p>
            <input type='radio' checked={active===1 ? true:false}></input>
        </div>
        {/* Second BTN */}
        <div className={`cursor-pointer flex  gap-x-3 justify-center content-center border border-solid p-2 px-4 bg-white dark:bg-neutral-900 transition duration-300 rounded-lg
                          ${active===2 ? "border-[3px] border-black dark:border-white " : "" }`}
          onClick={()=>setActive(2)}
        >
            <FaGithub className='h-6 self-center dark:text-white transition duration-300'/>
            <p className='content-center'>GitHub</p>
            <input type='radio' checked={active===2 ? true:false}></input>
        </div>
      </div>

      <div>
        <div className='grid grid-cols-3 w-[75%] gap-5'>
          {
            mainData.map((data)=>{
              return (
                <>
                  <Item key={data.id} data={data}/>
                </>
              )
            })
          }
        </div>
      </div>

      <div className='absolute right-10 mt-5 h-6 w-20 bg-yellow-500 rounded-xl cursor-pointer transition '
      onClick={toggle}
      >
          <div className={`w-10 flex justify-center bg-black text-white rounded-xl dark:bg-white transition duration-300 dark:text-black
                ${darkMode? "translate-x-10 " : ""}
            `}>
              {darkMode? "Light" : "Dark"}
          </div>
      </div>
    </div>
  )
}
