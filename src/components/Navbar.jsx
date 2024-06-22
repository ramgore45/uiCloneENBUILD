import React from 'react'

export const Navbar = ({darkMode}) => {
  return (
    <div className='w-full border-b bg-gray-50 dark:bg-neutral-700 dark:text-neutral-300 transition duration-300'>
      <div className='h-full p-5 pr-10 flex justify-end gap-x-5 '>
        <div>
          <p className='font-semibold'>Kuldip Waghmare</p>

          <p className='text-[11px] font-small'>kdexample123@gmail.com</p>
        </div>
        <div className='flex border rounded-full h-[45px] w-[45px] font-medium bg-gray-200 dark:bg-neutral-900 transition duration-300'>
          <p className='tracking-wider my-auto mx-auto'>KW</p>
        </div>
      </div>
    </div>
  )
}
