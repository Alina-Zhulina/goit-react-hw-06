import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact contact={contact} />
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
