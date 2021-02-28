import React from "react";

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <span>{`${contact.name}:`}</span>
          <span>{contact.number}</span>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;