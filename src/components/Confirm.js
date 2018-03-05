import React from 'react';
import { PurpleBackground } from './common';
import { Link } from 'react-router-dom';
import { Form, Field, Formik } from 'formik';

class Confirm extends React.Component {
  render() {
    return (
      <PurpleBackground className="purple-bg">
        <Formik
          initialValues={{
            confirmCode: ''
          }}
          validate={values => {
            let errors = {};
            if (!values.confirmCode) {
              errors.confirmCode = 'confirm code is required';
            } else if (
              isNaN(values.confirmCode) ||
              String(values.confirmCode).length !== 6
            ) {
              errors.confirmCode = 'confirm code must be 6 digits only';
            }

            return errors;
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
          render={({ errors, touched, isSubmitting }) => (
            <Form className="confirm-container">
              <h1 className="auth-heading">Confirm</h1>
              <Field type="text" name="confirmCode" className="auth-input" />
              {errors.confirmCode &&
                touched.confirmCode && (
                  <div className="error-field">{errors.confirmCode}</div>
                )}
              <Link to="/resend" className="forgot-resend-link">
                Resend
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

export default Confirm;
