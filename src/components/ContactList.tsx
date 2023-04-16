import { Contact } from '../@types/Contact'
import ContactCard from './ContactCard'

interface Props {
  contact?: Contact[]
}

function ContactList ({ contact }: Props) {
  return (
    <div className="space-y-4 overflow-y-scroll h-3/5">
      {contact?.reverse().sort((a: Contact, b: Contact) => b.id - a.id).map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            name={contact.firstName}
            lastname={contact.lastName}
            phone={contact.phone}
            email={contact.email}
            birth={contact.birth}
            data={contact}
          />
      ))}
    </div>
  )
}

export default ContactList
