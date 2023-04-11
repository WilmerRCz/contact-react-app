import { BiEdit } from 'react-icons/bi'
import { Contact } from '../@types/Contact'
import useModal from '../hooks/useModal'
import FormContact from './FormContact'
import Modal from './Modal'

interface Props {
  data?: Contact;
}

function EditButton ({ data }: Props) {
  const { showModal, open, closeModal } = useModal()
  return (
    <div className="ml-auto">
      <button onClick={showModal}>
        <BiEdit size={24} color={'#eab308'} />
      </button>
      <Modal
        open={open}
        closeModal={closeModal}
        title={'Editar Contacto'}
      >
        <FormContact data={data} />
      </Modal>
    </div>
  )
}

export default EditButton
