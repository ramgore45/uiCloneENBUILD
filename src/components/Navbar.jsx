import React from 'react'

export const Navbar = () => {
  return (
    <div className='w-full border-b border-black bg-gray-50 '>
      <div className='h-full p-5 pr-10 flex justify-end gap-x-5 '>
        <div>
          <p className='font-semibold'>Kuldip Waghmare</p>

          <p className='text-[11px] font-small'>kdexample123@gmail.com</p>
        </div>
        <div className='flex border rounded-full h-[45px] w-[45px] font-medium bg-gray-200'>
          <p className='tracking-wider my-auto mx-auto'>KW</p>
        </div>
      </div>
    </div>
  )
}
