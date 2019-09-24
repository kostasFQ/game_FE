import React from 'react';
import { Formik } from 'formik';
import { Button, Message, Form } from 'semantic-ui-react';
import validation from './validation';
import styles from './LoginForm.module.scss';

function LoginForm() {
  return (
    <div className={styles.form}>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={values => validation(values)}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Input
            fluid
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder='email'
            error={errors.email && touched.email && !!errors.email}
          />

          {/* {errors.email && touched.email && errors.email} */}

          {/* <Message
            error
            header='Action Forbidden'
            content='You can only sign up for an account once with a given e-mail address.'
          /> */}
          
          {/* <Form.Field>
            <Form.Input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder='password'
            />
            {errors.password && touched.password && errors.password}
          </Form.Field>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button> */}
        </Form>
      )}

      </Formik>
    </div>
  );
}

export default LoginForm;