import { BiEdit } from 'react-icons/bi'
import Modal from './Modal'
import { Contact } from '../../../../@types/Contact'
import useModal from '../../../../hooks/useModal'
import FormEditContact from './FormEditContact'

interface Props {
  data?: Contact
  refecthContacts: () => void
}

function EditButton ({ data, refecthContacts }: Props) {
  const { showModal, open, closeModal } = useModal()
  return (
    <div className="ml-auto">
      <button onClick={showModal}>
        <BiEdit size={24} className='text-yellow-400' />
      </button>
      <Modal
        open={open}
        closeModal={closeModal}
        title={'Editar Contacto'}
        idForm={'formEditContact'}
      >
        <FormEditContact data={data} closeModal={closeModal} refecthContacts={refecthContacts}/>
      </Modal>
    </div>
  )
}

export default EditButton
