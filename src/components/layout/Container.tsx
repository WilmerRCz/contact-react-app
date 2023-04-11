import React from 'react'

interface Props {
  children: React.ReactNode
}

function Container ({ children }:Props) {
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-4'>
      {children}
    </div>
  )
}

export default Container
