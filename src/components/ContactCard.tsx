import ContactData from './ContactData'
import DeleteButton from './ButtonDeleteContact'
import EditButton from './ButtonEditContact'
import ImageContact from './ImageContact'
import { Contact } from '../@types/Contact'
import useModal from '../hooks/useModal'
import Modal from './Modal'
import ViewContact from './ViewContact'

interface Props {
  name: string;
  lastname: string;
  birth?: string;
  phone?: string;
  email?: string;
  data: Contact
  refecthContacts: () => void
}
function ContactCard ({ name, lastname, phone, email, birth, data, refecthContacts }: Props) {
  const { open, closeModal, showModal } = useModal()
  return (
    <div>
      <div className="bg-slate-700 h-full w-80 sm:w-96 rounded-xl p-2 flex items-center space-x-6">
        <div className="">
          <ImageContact data={data}/>
        </div>
        <div className="flex items-center justify-between w-full">
          <ContactData
            name={name}
            lastname={lastname}
            phone={phone}
            email={email}
            birth={birth}
            onClick={showModal}
          />
          <div className="space-y-4 m-2">
            <EditButton data={data} refecthContacts={refecthContacts}/>
            <DeleteButton data={data} refecthContacts={refecthContacts}/>
          </div>
          <Modal open={open} closeModal={closeModal} title={'Contacto'}>
            <ViewContact data={data}/>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
