import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

function LoginForm() {
  return (
    <Fragment>
      <Formik
        initialValues={{email: '', password: ''}}
        validate={values => {
          let errors = {};
          if(!values.email) {
            errors.email = 'Required';
          }
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = 'Invalid'
          }
          if(!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
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
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={!!errors.email && !!touched.email}
          />
          {errors.email && touched.email && errors.email}
          <TextField
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </form>
      )}

      </Formik>
    </Fragment>
  );
}

export default LoginForm;