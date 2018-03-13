import React from 'react';
import { FullSizeBackground } from './common';
import { Form, Field, Formik } from 'formik';
import { userPool } from '../utils';
import { CognitoUser } from 'amazon-cognito-identity-js';

class ForgotPassword extends React.Component {
  render() {
    userPool.getCurrentUser();
    return (
      <FullSizeBackground backgroundColor="#4b395a">
        <Formik
          initialValues={{
            verificationCode: '',
            newPassword: ''
          }}
          validate={values => {
            let errors = {};
            if (!values.verificationCode) {
              errors.verificationCode = 'confirm code is required';
            } else if (
              isNaN(values.verificationCode) ||
              String(values.verificationCode).length !== 6
            ) {
              errors.verificationCode = 'confirm code must be 6 digits only';
            }

            if (!values.newPassword) {
              errors.newPassword = 'new Password is required';
            } else if (String(values.newPassword).length < 8) {
              errors.newPassword = 'confirm code must be 8 digits only';
            }
            return errors;
          }}
          onSubmit={({ verificationCode, newPassword }, actions) => {
            const username = this.props.signupUsername;
            if (!username) {
              this.props.confirmFailure();
            }
            this.props.User.confirmPassword(verificationCode, newPassword, {
              onSuccess: () => {
                this.props.confirmSuccess(newPassword);
              },
              onFailure: err => {
                console.log(err);
                this.props.confirmFailure();
              }
            });
          }}
          render={({ errors, touched, isSubmitting }) => (
            <Form className="confirm-container">
              <h1 className="auth-heading">Change Password</h1>
              <Field
                type="text"
                name="verificationCode"
                placeholder="VERIFICATION CODE"
                className="auth-input"
              />
              {errors.verificationCode &&
                touched.verificationCode && (
                  <div className="error-field">{errors.verificationCode}</div>
                )}
              <Field
                id="newPassword"
                type="password"
                name="newPassword"
                placeholder="NEW PASSWORD"
                className="auth-input"
              />
              {errors.newPassword &&
                touched.newPassword && (
                  <div className="error-field">{errors.newPassword}</div>
                )}
              <button
                className="next-btn"
                type="submit"
                disabled={isSubmitting}
              >
                CHANGE
              </button>
            </Form>
          )}
        />
      </FullSizeBackground>
    );
  }
}

export default ForgotPassword;
