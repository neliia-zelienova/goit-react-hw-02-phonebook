import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactsList from "./components/ContactsList";

class App extends React.Component {
  state = {
    contacts: [
      { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
      { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  filteredArray = [];

  handleInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.contacts.push({
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    });
    this.resetForm();
  };

  handleFiltering = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                onChange={this.handleInput}
                value={this.state.name}
              ></input>
            </label>
            <label>
              Number
              <input
                type="text"
                name="number"
                onChange={this.handleInput}
                value={this.state.number}
              ></input>
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <input
            type="text"
            name="filter"
            onChange={this.handleFiltering}
          ></input>

          {this.state.filter.length > 0 ? (
            <ContactsList contacts={this.filteredContacts()} />
          ) : (
            <ContactsList contacts={this.state.contacts} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
