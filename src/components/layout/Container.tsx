import React from 'react'

interface Props {
  children: React.ReactNode
}

function Container({children}:Props) {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}

export default Container