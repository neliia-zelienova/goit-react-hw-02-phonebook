import React from "react";

class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  handleInput = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
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
    );
  }
}

export default ContactForm;
