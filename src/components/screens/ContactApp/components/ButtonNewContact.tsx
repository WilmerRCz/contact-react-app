import { BiPlusCircle } from 'react-icons/bi'
import Modal from './Modal'
import useModal from '../../../../hooks/useModal'
import FormCreateContact from './FormCreateContact'

interface Props {
  refecthContacts: () => void
}

function ButtonNewContact ({ refecthContacts }: Props) {
  const { showModal, open, closeModal } = useModal()
  return (
    <div>
      <button
        className="p-2 w-80 sm:w-96 bg-slate-800 rounded flex justify-center items-center"
        onClick={showModal}
      >
        <BiPlusCircle size={24} color={'#4ade80'} />
      </button>
      <Modal open={open} closeModal={closeModal} title={'Crear contacto nuevo'} idForm={'formCreateContact'}>
        <FormCreateContact refecthContacts={refecthContacts} closeModal={closeModal}/>
      </Modal>
    </div>
  )
}

export default ButtonNewContact
