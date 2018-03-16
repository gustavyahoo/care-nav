import React from 'react';
import { FullSizeBackground } from './common';
import { Route } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import Yup from 'yup';
import { rEmail, rUSPHONE } from '../utils';
import {
  CognitoUser,
  CognitoUserAttribute,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';
import Confirm from './Confirm';
import { userPool } from '../utils';
import ForgotPassword from './ForgotPassword';

// You validation for emailOrPhone types
Yup.addMethod(Yup.string, 'emailOrPhone', function(regex, message) {
  return this.test({
    message: message,
    params: { regex },
    // test: value => regex.email.test(value) || regex.phone.test(value)
    test: value =>
      value &&
      (regex.email.test(value) || !isNaN(value.substr(1, value.length)))
  });
});

// cognito user login
const loginUser = (emailOrPhone, password) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: emailOrPhone,
    Password: password
  });
  const User = new CognitoUser({
    Username: emailOrPhone,
    Pool: userPool
  });
  return new Promise((resolve, reject) => {
    User.authenticateUser(authenticationDetails, {
      onSuccess: resolve,
      onFailure: reject
    });
  });
};

// congito signup
const SignupUser = ({ emailOrPhone, password }) => {
  let attributeList = [];
  let dataUsername = null;

  // const dataName = {
  //   Name: 'name',
  //   Value: 'Test user'
  // };
  if (!isNaN(emailOrPhone.substr(1, emailOrPhone.length))) {
    dataUsername = {
      Name: 'phone_number',
      Value: emailOrPhone
    };
  } else {
    dataUsername = {
      Name: 'email',
      Value: emailOrPhone
    };
  }
  const attributeUsername = new CognitoUserAttribute(dataUsername);
  attributeList.push(attributeUsername);
  // attributeList.push(dataName);

  return new Promise((resolve, reject) => {
    userPool.signUp(
      emailOrPhone,
      password,
      attributeList,
      null,
      (err, result) => {
        if (err) {
          console.log(err);
          if (err.code === 'UsernameExistsException') {
            alert('User already exists');
          }
          if (err.code === 'InvalidPasswordException') {
            alert('Password is not strong enough');
          }
          return;
        }
        const cognitoUser = result.user;
        resolve(cognitoUser.getUsername());
      }
    );
  });
};

// higher order function for creating form
const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    emailOrPhone: Yup.string()
      .required('Email or phone is required.')
      .emailOrPhone(
        { email: rEmail, phone: rUSPHONE },
        'Valid email or US phone is required'
      ),
    password: Yup.string()
      .min(8, 'Password should be atleast 8 character long')
      .required('Password is required.'),
    fullname: Yup.string()
      .min(4, 'Full name should be at least 4 characters long')
      .required(),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords not same')
      .required('Password confirm is required')
  }),
  mapPropsToValues: ({ credentials }) => ({
    ...credentials
  }),
  handleSubmit: async (
    payload,
    { props, setSubmitting, setErrors, callback }
  ) => {
    setSubmitting(false);
    console.log(payload);
    return;
    try {
      const user = await loginUser(payload.emailOrPhone, payload.password);
      props.loginSuccess(user);
    } catch (err) {
      console.log(err);
      if (err.code === 'UserNotFoundException') {
        await SignupUser(payload);
        props.confirmUser(payload.emailOrPhone, payload.password);
      } else if (err.code === 'UserNotConfirmedException') {
        props.confirmUser(payload.emailOrPhone, payload.password);
      }
    }
  },
  displayName: 'LoginForm'
});

// display form
export const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  forgot,
  setErrors
}) => (
  <Form className="login-container">
    <h1 className="auth-heading">Sign Up</h1>
    {errors.genericError && (
      <div className="error-field">{errors.genericError}</div>
    )}
    <Field
      type="text"
      name="emailOrPhone"
      id="emailOrPhone"
      placeholder="EMAIL/PHONE NUMBER (+15417543010)"
      className="auth-input"
    />
    {errors.emailOrPhone &&
      touched.emailOrPhone && (
        <div className="error-field">{errors.emailOrPhone}</div>
      )}
    <Field
      type="text"
      name="fullname"
      id="fullname"
      placeholder="FULL NAME"
      className="auth-input"
    />
    {errors.fullname &&
      touched.fullname && <div className="error-field">{errors.fullname}</div>}
    <Field
      id="password"
      type="password"
      name="password"
      placeholder="PASSWORD"
      className="auth-input"
    />
    {errors.password &&
      touched.password && <div className="error-field">{errors.password}</div>}
    <Field
      id="confirm"
      type="password"
      name="confirm"
      placeholder="CONFIRM PASSWORD"
      className="auth-input"
    />
    {errors.confirm &&
      touched.confirm && <div className="error-field">{errors.confirm}</div>}
    <button className="next-btn" type="submit" disabled={isSubmitting}>
      SIGN UP
    </button>
  </Form>
);

export const LoginForm = formikEnhancer(InnerForm);

class SignUp extends React.Component {
  state = {
    emailOrPhone: '',
    password: '',
    confirm: '',
    fullname: ''
  };
  _confirmUser = (emailOrPhone, password) => {
    this.setState({
      emailOrPhone,
      password,
      User: null
    });
    this.props.history.push('/login/confirm');
  };
  _loginSuccess = user => {
    this.props.history.push('/');
  };
  _confirmSuccess = async () => {
    const { emailOrPhone, password } = this.state;
    const user = await loginUser(emailOrPhone, password);
    if (user) {
      this.props.history.push('/');
    }
  };
  _confirmSuccessOnPasswordChange = async newPassword => {
    const { emailOrPhone } = this.state;
    const user = await loginUser(emailOrPhone, newPassword);
    if (user) {
      this.props.history.push('/');
    }
  };
  _failure = () => {
    this.setState({
      emailOrPhone: '',
      password: ''
    });
    this.props.history.push('/login');
  };
  render() {
    const { emailOrPhone, password, fullname, confirm } = this.state;
    return (
      <FullSizeBackground backgroundColor="#4b395a">
        <Route
          exact
          path={`${this.props.match.url}`}
          render={props => (
            <LoginForm
              credentials={{ emailOrPhone, password, confirm, fullname }}
              confirmUser={this._confirmUser}
              loginSuccess={this._loginSuccess}
              {...props}
            />
          )}
        />
        <Route
          path={`${this.props.match.url}/confirm`}
          render={props => (
            <Confirm
              signupUsername={this.state.emailOrPhone}
              confirmSuccess={this._confirmSuccess}
              confirmFailure={this._failure}
              {...props}
            />
          )}
        />
      </FullSizeBackground>
    );
  }
}

export default SignUp;
