import ButtonLogout from './components/ButtonLogout'
import ContactList from './components/ContactList'
import Container from '../../layout/Container'
import TitleSection from '../../TitleSection'
import useAllContacts from './hooks/useAllContacts'
import ButtonNewContact from './components/ButtonNewContact'

function ContactApp () {
  const { contacts, refetch, loading } = useAllContacts()
  return (
    <Container>
      <TitleSection title='Contact App'/>
      <ButtonNewContact refecthContacts={refetch}/>
      <ContactList contact={contacts} refecthContacts={refetch} loading={loading}/>
      <ButtonLogout/>
    </Container>
  )
}

export default ContactApp
