import { AiFillDelete } from 'react-icons/ai'
import { Contact } from '../@types/Contact'

interface Props {
  data?: Contact
}
function DeleteButton ({ data }:Props) {
  return (
    <div className="ml-auto">
      <button onClick={() => alert(`Se elimino correctamente el contacto: ${data?.id}`)}>
        <AiFillDelete size={24} color={'#ef4444'}/>
      </button>
    </div>
  )
}

export default DeleteButton
