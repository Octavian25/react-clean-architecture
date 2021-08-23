import React from 'react';
import { Alert, FloatingLabel, Form } from 'react-bootstrap';

const inputStyle1 = ({ input, label, type, meta: { touched, error, warning } }) => (
  <FloatingLabel controlId="floatingInput" label={label} className="mb-3">
    <Form.Control type={type} placeholder={label} {...input} />
    {touched &&
      ((error && <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>) ||
        (warning && <Form.Control.Feedback>{warning}</Form.Control.Feedback>))}
  </FloatingLabel>
);

const ShowAlert = (variant, message) => {
  return (
    <div>
      <Alert variant={variant}>{message}</Alert>
    </div>
  );
};
const data = { ShowAlert, inputStyle1 };
export default data;
