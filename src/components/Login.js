import React from 'react';
import { FullSizeBackground } from './common';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import { rEmail, rUSPHONE } from '../utils';

Yup.addMethod(Yup.string, 'emailOrPhone', function(regex, message) {
  return this.test({
    message: message,
    params: { regex },
    test: value => regex.email.test(value) || regex.phone.test(value)
  });
});

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    emailOrPhone: Yup.string()
      .required('Email or phone is required.')
      .emailOrPhone(
        { email: rEmail, phone: rUSPHONE },
        'Valid email or US phone is required'
      ),
    password: Yup.string()
      .min(6, 'Password should be atleast 6 character long')
      .required('Password is required.')
  }),
  mapPropsToValues: ({ credentials }) => ({
    ...credentials
  }),
  handleSubmit: (payload, { props, setSubmitting, setErrors }) => {
    console.log(payload);
    setSubmitting(false);
  },
  displayName: 'LoginForm'
});

export const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting
}) => (
  <Form className="login-container">
    <h1 className="auth-heading">Log in/Registration</h1>
    <Field
      type="text"
      name="emailOrPhone"
      id="emailOrPhone"
      placeholder="EMAIL/PHONE NUMBER"
      className="auth-input"
    />
    {errors.emailOrPhone &&
      touched.emailOrPhone && (
        <div className="error-field">{errors.emailOrPhone}</div>
      )}
    <Field
      id="password"
      type="password"
      name="password"
      placeholder="PASSWORD"
      className="auth-input"
    />
    {errors.password &&
      touched.password && <div className="error-field">{errors.password}</div>}
    <div className="forgot-resend-link-ctn">
      <Link to="/forgot-password" className="forgot-resend-link">
        Forgot...
      </Link>
    </div>
    <button className="next-btn" type="submit" disabled={isSubmitting}>
      NEXT
    </button>
  </Form>
);

export const LoginForm = formikEnhancer(InnerForm);

class Login extends React.Component {
  render() {
    return (
      <FullSizeBackground backgroundColor="#4b395a">
        <LoginForm credentials={{ emailOrPhone: '', password: '' }} />
      </FullSizeBackground>
    );
  }
}

export default Login;
