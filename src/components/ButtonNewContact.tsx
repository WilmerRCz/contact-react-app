import { BiPlusCircle } from 'react-icons/bi'
import Modal from './Modal'
import useModal from '../hooks/useModal'
import FormContact from './FormContact'

function ButtonNewContact () {
  const { showModal, open, closeModal } = useModal()
  return (
    <div>
      <button
        className="m-2 p-2 w-80 sm:w-96 bg-slate-800 rounded flex justify-center items-center"
        onClick={showModal}
      >
        <BiPlusCircle size={24} color={'#4ade80'} />
      </button>
      <Modal open={open} closeModal={closeModal} title={'Crear contacto nuevo'}>
        <FormContact />
      </Modal>
    </div>
  )
}

export default ButtonNewContact
