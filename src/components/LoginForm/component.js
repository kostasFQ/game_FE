import React from 'react';
import { withRouter } from "react-router";
import { Formik } from 'formik';
import { Button, Form, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import validation from './validation';
import { makeCall } from 'api/call';
import styles from './LoginForm.module.scss';

function LoginForm(props) {
  const { history } = props;

  return (
    <div className={styles.form}>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={values => validation(values)}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await makeCall(values);
            setSubmitting(false);
            history.push('/profile');
          } catch(err) {
            alert(err.message);
          }
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
          <Form.Field className={styles.field}>
            <Input
              label={{ icon: 'asterisk' }}
              labelPosition='right corner'
              type="email"
              name="email"
              placeholder='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={!!errors.email && !!touched.email}
            />
            {
              errors.email && touched.email && (
                <div className={styles.errorMessage}>{errors.email}</div>
              )
            }
          </Form.Field>

          <Form.Field className={styles.field}>
            <Input
              label={{ icon: 'asterisk' }}
              labelPosition='right corner'
              type="password"
              name="password"
              placeholder='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              error={!!errors.password && !!touched.password}
            />
            {
              errors.password && touched.password && (
                <div className={styles.errorMessage}>{errors.password}</div>
              )
            }
          </Form.Field>
          <div className={styles.buttonsBlock}>
            <Button type="submit" loading={isSubmitting}>
              Log In
            </Button>
          </div>
          <Link to="/register" className={styles.registerLink}>Need an account?</Link>
        </Form>
      )}
      </Formik>
    </div>
  );
}

export default withRouter(LoginForm);