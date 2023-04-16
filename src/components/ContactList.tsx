import { Contact } from '../@types/Contact'
import ContactCard from './ContactCard'

interface Props {
  contact?: Contact[]
  refecthContacts: () => void
}

function ContactList ({ contact, refecthContacts }: Props) {
  return (
    <div className="space-y-4 overflow-y-scroll h-3/5">
      {contact?.map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            name={contact.firstName}
            lastname={contact.lastName}
            phone={contact.phone}
            email={contact.email}
            birth={contact.birth}
            data={contact}
            refecthContacts={refecthContacts}
          />
      ))}
    </div>
  )
}

export default ContactList
