const Contact = ({ contact }) => {
  return (
    <div>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
    </div>
  );
};

export default Contact;
