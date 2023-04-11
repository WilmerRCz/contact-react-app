import React from 'react'
import { Link } from 'react-router-dom'
import ButtonLayout from '../ButtonLayout'
import Container from '../layout/Container'

function NotFound () {
  return (
    <Container>
        <h1 className='font-bold text-2xl sm:text-6xl text-white my-4'>404 Not Found</h1>
        <Link to={'/'} replace>
          <ButtonLayout title='Back Home' borderColor='border-slate-800' backgroundColor='bg-slate-800' />
        </Link>
    </Container>
  )
}

export default NotFound
