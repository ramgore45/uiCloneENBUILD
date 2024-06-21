import React, { useState } from 'react'

export const Content = ({content}) => {
 
  return (
    <div className="flex gap-x-2 text-[17px] font-medium">
        <p className='p-1'>{content.icon}</p>
        <p className=''>{content.title}</p>
    </div>
  )
}
