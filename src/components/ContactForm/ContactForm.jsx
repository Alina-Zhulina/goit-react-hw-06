import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(50, "To long").required("Required"),
  number: Yup.string()
    .min(7, "To short")
    .max(50, "To long")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format XXX-XX-XX")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: nanoid(),
    };

    onAddContact(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberId}
            placeholder="XXX-XX-XXX"
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
