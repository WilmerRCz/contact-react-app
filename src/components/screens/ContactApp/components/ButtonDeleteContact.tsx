import { AiFillDelete } from 'react-icons/ai'
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
        <AiFillDelete size={24} color={'#ef4444'}/>
      </button>
    </div>
  )
}

export default DeleteButton
