import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Container from "./components/Container";

class App extends React.Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    if (this.isContactExist(name)) alert(`${name} is already in contacts`);
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

  render() {
    return (
      <div className="App">
        <Container title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Container>
        <Container title="Contacts">
          <Filter onChange={this.handleFiltering} />
          {this.state.filter.length > 0 ? (
            <ContactsList
              contacts={this.filteredContacts()}
              onDelete={this.deleteContact}
            />
          ) : (
            <ContactsList
              contacts={this.state.contacts}
              onDelete={this.deleteContact}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
