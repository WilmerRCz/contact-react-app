import ButtonLogout from '../../ButtonLogout'
import ButtonNewContact from '../../ButtonNewContact'
import ContactList from '../../ContactList'
import Container from '../../layout/Container'
import TitleSection from '../../TitleSection'
import useAllContacts from './hooks/useAllContacts'

function ContactApp () {
  const { contacts, refetch } = useAllContacts()
  return (
    <Container>
      <TitleSection title='Contact App'/>
      <ButtonNewContact refetchContacts={refetch}/>
      <ContactList contact={contacts}/>
      <ButtonLogout/>
    </Container>
  )
}

export default ContactApp