import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul className={css.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.contactListItem}>
            <Contact contact={contact} />
            <button
              className={css.buttonDelete}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
