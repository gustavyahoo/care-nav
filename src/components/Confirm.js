import React from 'react';
import { FullSizeBackground } from './common';
import { Form, Field, Formik } from 'formik';
import { userPool } from '../utils';
import { CognitoUser } from 'amazon-cognito-identity-js';

class Confirm extends React.Component {
  _resend = e => {
    e.preventDefault();
    const username = this.props.signupUsername;
    if (!username) {
      this.props.confirmFailure();
    }
    const User = new CognitoUser({
      Username: username,
      Pool: userPool
    });
    User.resendConfirmationCode(function(err, result) {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    });
  };
  render() {
    userPool.getCurrentUser();
    return (
      <FullSizeBackground backgroundColor="#4b395a">
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
            const username = this.props.signupUsername;
            if (!username) {
              this.props.history.push('/login');
            }
            const User = new CognitoUser({
              Username: username,
              Pool: userPool
            });
            User.confirmRegistration(
              values.confirmCode,
              true,
              (err, result) => {
                if (err) {
                  console.log(err);
                  return;
                }
                this.props.confirmSuccess();
                return;
              }
            );
          }}
          render={({ errors, touched, isSubmitting }) => (
            <Form className="confirm-container">
              <h1 className="auth-heading">Confirm</h1>
              <Field
                type="text"
                name="confirmCode"
                className="auth-input"
                placeholder="CONFIRM CODE"
              />
              {errors.confirmCode &&
                touched.confirmCode && (
                  <div className="error-field">{errors.confirmCode}</div>
                )}
              <a className="forgot-resend-link" onClick={this._resend}>
                Resend
              </a>
              <button
                className="next-btn"
                type="submit"
                disabled={isSubmitting}
              >
                CONFIRM
              </button>
            </Form>
          )}
        />
      </FullSizeBackground>
    );
  }
}

export default Confirm;
