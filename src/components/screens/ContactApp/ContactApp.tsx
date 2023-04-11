import ButtonNewContact from '../../ButtonNewContact'
import ContactList from '../../ContactList'
import Container from '../../layout/Container'
import TitleSection from '../../TitleSection'

function ContactApp () {
  return (
    <Container>
      <TitleSection title='Contact App' />
      <ButtonNewContact/>
      <ContactList />
    </Container>
  )
}

export default ContactApp
