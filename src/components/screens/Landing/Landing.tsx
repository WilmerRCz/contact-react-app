import React from 'react'
import Container from '../../layout/Container'
import { Link } from 'react-router-dom'
import ButtonLayout from '../../ButtonLayout'

function Landing () {
  return (
    <Container>
      <h1 className='font-bold text-2xl sm:text-4xl text-white'>My contact</h1>
      <p className='text-white'>
        My Contact App is a simple contact management app!
      </p>
      <Link to={'/login'} >
        <ButtonLayout title='Login' extraClassName='border-teal-700 bg-teal-500' />
      </Link>
    </Container>
  )
}

export default Landing
