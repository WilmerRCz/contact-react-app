import React from "react";
import AppName from "../AppName";
import ButtonNewContact from "../ButtonNewContact";

import ContactList from "../ContactList";
import Container from "../layout/Container";

function ContactApp() {
  return (
    <Container>
      <AppName />
      <ButtonNewContact/>
      <ContactList />
    </Container>
  );
}

export default ContactApp;
