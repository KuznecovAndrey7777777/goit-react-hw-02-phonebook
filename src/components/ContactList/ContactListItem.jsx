import React, { Component } from 'react';
import './ContactListItem.css';

class ContactListItem extends Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <li className="ContactListItem">
        <p>
          {name}: {number}
        </p>
        <button onClick={() => onDeleteContact(id)} type="button">
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
