import React from 'react'

export const Item = ({data}) => {
  return (
    <div className='flex flex-col border rounded-md p-6 gap-y-5 shadow-md bg-white dark:bg-neutral-800 transition duration-300'>
      <div className='flex justify-between '> 
          <p className='w-10 h-10 p-2 border content-center rounded-full bg-gray-100 cursor-pointer'><img src={data.proImg}/></p>
          <p className='text-2xl content-center cursor-pointer'>{data.sideIcon}</p>
      </div>

        <p className='font-bold text-xl'>{data.title}</p>
        <p>{data.desc}</p>
        <button className='self-start p-2 px-4 rounded-md font-semibold text-white bg-[#0066cc]'>{data.buttonTxt}</button>
    </div>
  )
}
