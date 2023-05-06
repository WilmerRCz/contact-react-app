import React from 'react'
import { ImSpinner } from 'react-icons/im'

function SpinIcon() {
  return (
    <div className=''>
      <ImSpinner className='text-gray-300' size={48} style={{
        transform: "rotate(0deg)",
        animation: "spin 1s linear infinite",
      }}/>
    </div>
  )
}

export default SpinIcon