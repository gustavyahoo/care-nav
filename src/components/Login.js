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
      .required('Password is required.')
  }),
  mapPropsToValues: ({ credentials }) => ({
    ...credentials
  }),
  handleSubmit: async (
    payload,
    { props, setSubmitting, setErrors, callback }
  ) => {
    setSubmitting(false);
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
    <h1 className="auth-heading">Log in/Registration</h1>
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
      id="password"
      type="password"
      name="password"
      placeholder="PASSWORD"
      className="auth-input"
    />
    {errors.password &&
      touched.password && <div className="error-field">{errors.password}</div>}
    <div className="forgot-resend-link-ctn">
      <a
        className="forgot-resend-link"
        onClick={e => {
          e.preventDefault();
          // setErrors({ genericError: 'Username or password is incorrect' });
          forgot(values.emailOrPhone);
        }}
      >
        Forgot...
      </a>
    </div>
    <button className="next-btn" type="submit" disabled={isSubmitting}>
      NEXT
    </button>
  </Form>
);

export const LoginForm = formikEnhancer(InnerForm);

class Login extends React.Component {
  state = {
    emailOrPhone: '',
    password: ''
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
  _forgot = emailOrPhone => {
    if (!emailOrPhone) {
      alert('please enter email or phone number');
      return;
    }
    const User = new CognitoUser({
      Username: emailOrPhone,
      Pool: userPool
    });
    this.setState(
      {
        User
      },
      () => {
        User.forgotPassword({
          onSuccess: data => {
            this.setState({
              emailOrPhone,
              password: ''
            });
            this.props.history.push('/login/forgot');
          },
          onFailure: err => {
            console.log(err);
            this.setState({
              emailOrPhone: '',
              password: ''
            });
          }
        });
      }
    );
  };
  _failure = () => {
    this.setState({
      emailOrPhone: '',
      password: ''
    });
    this.props.history.push('/login');
  };
  render() {
    const { emailOrPhone, password } = this.state;
    return (
      <FullSizeBackground backgroundColor="#4b395a">
        <Route
          exact
          path={`${this.props.match.url}`}
          render={props => (
            <LoginForm
              credentials={{ emailOrPhone, password }}
              confirmUser={this._confirmUser}
              loginSuccess={this._loginSuccess}
              forgot={this._forgot}
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
        <Route
          path={`${this.props.match.url}/forgot`}
          render={props => (
            <ForgotPassword
              signupUsername={this.state.emailOrPhone}
              confirmSuccess={this._confirmSuccessOnPasswordChange}
              confirmFailure={this._failure}
              {...props}
              User={this.state.User}
            />
          )}
        />
      </FullSizeBackground>
    );
  }
}

export default Login;
