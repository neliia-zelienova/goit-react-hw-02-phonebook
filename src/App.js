import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList/ContactsList";
import Filter from "./components/Filter/Filter";
import ContactForm from "./components/ContactForm/ContactForm";
import Container from "./components/Container/Container";
import Notification from './components/Notification';

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    if (this.isContactExist(name)) alert(`${name} is already in contacts`);
    else if (name === "" || number === "") return;
    else this.addNewContact({ name, number });
  };

  isContactExist = (name) => {
    return this.state.contacts.find((contact) => contact.name === name);
  };

  addNewContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.filter((contact) => contact.id !== id)],
    }));
  };

  handleFiltering = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  getContactsForRender = () => {
    return this.state.filter.length > 0
      ? this.filteredContacts()
      : this.state.contacts;
  };

  render() {
    return (
      <div className="App">
        <Container title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Container>
        {this.state.contacts.length > 0 ? (
            <Container title="Contacts">
              <Filter onChange={this.handleFiltering} />
              <ContactsList
                contacts={this.getContactsForRender()}
                onDelete={this.deleteContact}
              />
            </Container>
        ) : (
          <Notification message="No contacts here yet..." />
        )}
      </div>
    );
  }
}

export default App;
