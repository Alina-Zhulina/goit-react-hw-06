import { useSelector, useDispatch } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactsSlice";
import { selectNameFilter, changeFilter } from "./redux/filtersSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
    </div>
  );
}

export default App;
