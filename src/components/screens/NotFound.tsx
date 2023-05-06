import { Link } from 'react-router-dom'
import ButtonLayout from '../ButtonLayout'
import Container from '../layout/Container'

function NotFound () {
  return (
    <Container>
        <h1 className='font-bold text-2xl sm:text-6xl text-white my-4'>404 Not Found</h1>
        <Link to={'/'} replace>
          <ButtonLayout title='Back Home' extraClassName='border-teal-700 bg-teal-500' />
        </Link>
    </Container>
  )
}

export default NotFound
