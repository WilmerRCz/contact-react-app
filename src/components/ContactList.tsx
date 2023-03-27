import { Contact } from "../@types/Contact";
import { Contacts } from "../database/data";
import ContactCard from "./ContactCard";

function ContactList() {
  return (
    
    <div className="space-y-4 overflow-y-scroll h-3/5">
      {Contacts.map((contact: Contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            lastname={contact.lastname}
            phone={contact.phone}
            email={contact.email}
            birth={contact.birth}
          />
      ))}
    </div>
  );
}

export default ContactList;
