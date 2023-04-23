import { IoMdContact } from 'react-icons/io'

function NotContacts () {
  return (
    <div>
    <div className='flex justify-center items-center mx-auto'>
      <IoMdContact size={96} color={'#94a3b8'}/>
    </div>
    <div className='items-center justify-center text-center '>
      <h1 className='text-white text-xl'>No Contacts</h1>
    </div>
    </div>
  )
}

export default NotContacts
