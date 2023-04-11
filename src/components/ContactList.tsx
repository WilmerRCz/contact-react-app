import { Contact } from '../@types/Contact'
import { Contacts } from '../database/data'
import ContactCard from './ContactCard'

function ContactList () {
  return (
    <div className="space-y-4 overflow-y-scroll h-3/5">
      {Contacts.reverse().sort((a: Contact, b: Contact) => b.id - a.id).map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            lastname={contact.lastname}
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
