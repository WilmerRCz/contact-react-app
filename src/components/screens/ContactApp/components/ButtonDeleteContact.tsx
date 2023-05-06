import { BiTrash } from 'react-icons/bi'
import { Contact } from '../../../../@types/Contact'
import useRemoveContact from '../hooks/useRemoveContact'

interface Props {
  data: Contact
  refecthContacts: () => void
}
function DeleteButton ({ data, refecthContacts }:Props) {
  const { handleRemove } = useRemoveContact(data.id, refecthContacts)
  return (
    <div className="ml-auto">
      <button onClick={handleRemove}>
        <BiTrash size={24} className='text-red-500'/>
      </button>
    </div>
  )
}

export default DeleteButton
