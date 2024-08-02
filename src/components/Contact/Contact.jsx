const Contact = ({ contact }) => {
  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
