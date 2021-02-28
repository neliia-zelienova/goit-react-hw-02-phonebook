import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    contacts: [{ id: uuidv4(), name: "TestName1" }],
    name: "",
    phone: ""
  };

  handleInput = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.contacts.push({
      id: uuidv4(),
      name: this.state.name,
    });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
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
              Phone
              <input
                type="text"
                name="phone"
                onChange={this.handleInput}
                value={this.state.name}
              ></input>
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>
        <div>
          <h1>Contacts</h1>
          <ul>
            {this.state.contacts.map((contact) => (
              <li key={contact.id}>{contact.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
