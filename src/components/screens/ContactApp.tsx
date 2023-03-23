import React from "react";
import AppName from "../AppName";

import ContactList from "../ContactList";
import Container from "../layout/Container";

function ContactApp() {
  return (
    <Container>
      <AppName />
      <ContactList />
    </Container>
  );
}

export default ContactApp;
