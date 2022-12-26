import { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handelSubmit = e => {
    e.preventDefault();
    const { contacts } = this.state;
    const newName = e.target.elements.name.value;
    const newNumber = e.target.elements.number.value;
    const findeName = contacts.some(contact =>
      contact.name.toLowerCase().includes(newName.toLowerCase())
    );
    const findeNumber = contacts.some(contact =>
      contact.number.trim().includes(newNumber.trim())
    );

    const newContact = [
      {
        id: nanoid(),
        name: newName,
        number: newNumber,
      },
    ];

    if (!findeName && !findeNumber) {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, ...newContact],
      }));
      e.target.reset();
    } else {
      alert(`${newName} is already in contacts`);
    }
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLocaleLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handelSubmit} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChange} />
        <ContactList contacts={visibleContacts} />
      </>
    );
  }
}
