import { Button, Card, Form } from 'react-bootstrap';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from '../../infrastructure/shared/style';
import { sendLogin } from '../../application/actions/login';

const LoginForm = (prop) => {
  const { handleSubmit, pristine, submitting } = prop;
  return (
    <Card body>
      <Form onSubmit={handleSubmit}>
        <Field name="user_id" type="text" label="Email" component={style.inputStyle1} />
        <Field name="password" type="password" label="Password" component={style.inputStyle1} />
        <Button
          variant="primary"
          type="button"
          disabled={pristine || submitting}
          onClick={() => prop.dispatch(sendLogin)}
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default reduxForm({
  form: 'LoginForm',
})(LoginForm);
