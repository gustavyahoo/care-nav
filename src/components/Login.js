import React from 'react';
import { PurpleBackground } from './common';
import { Link } from 'react-router-dom';
import { Form, Field, Formik } from 'formik';

class Login extends React.Component {
  render() {
    return (
      <PurpleBackground className="purple-bg">
        <Formik
          initialValues={{
            emailOrPhone: '',
            password: ''
          }}
          validate={values => {
            let errors = {};
            if (!values.emailOrPhone) {
              errors.emailOrPhone = 'Email or phone is required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                values.emailOrPhone
              )
            ) {
              if (
                isNaN(values.emailOrPhone) ||
                String(values.emailOrPhone).length !== 10
              ) {
                errors.emailOrPhone = 'Invalid email address or phone number';
              }
            }
            if (!values.password) {
              errors.password = 'Password is required';
            }

            return errors;
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            this.props.history.push('/confirm');
            // should lead user to confirmation screen

            // CallMyApi(user.id, values).then(
            //   updatedUser => {
            //     actions.setSubmitting(false);
            //     updateUser(updatedUser), onClose();
            //   },
            //   error => {
            //     actions.setSubmitting(false);
            //     actions.setErrors(transformMyAPIErrorToAnObject(error));
            //   }
            // );
          }}
          render={({ errors, touched, isSubmitting }) => (
            <Form className="login-container">
              <h1 className="auth-heading">Log in/Registration</h1>
              <Field type="text" name="emailOrPhone" className="auth-input" />
              {errors.emailOrPhone &&
                touched.emailOrPhone && (
                  <div className="error-field">{errors.emailOrPhone}</div>
                )}
              <Field type="password" name="password" className="auth-input" />
              {errors.password &&
                touched.password && (
                  <div className="error-field">{errors.password}</div>
                )}
              <Link to="/forgot-password" className="forgot-resend-link">
                Forgot...
              </Link>
              <button
                className="next-btn"
                type="submit"
                disabled={isSubmitting}
              >
                NEXT
              </button>
            </Form>
          )}
        />
      </PurpleBackground>
    );
  }
}

export default Login;
