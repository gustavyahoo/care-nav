import React from 'react';
import { PurpleBackground } from './common';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    emailOrPhone: '',
    password: ''
  };

  _submit = e => {
    e.preventDefault();
    const { emailOrPhone, password } = this.state;
    console.log(emailOrPhone, password);
  };
  render() {
    return (
      <PurpleBackground className="purple-bg">
        <form onSubmit={this._submit} className="login-container">
          <h1 className="auth-heading">Log in/Registration</h1>
          <input
            className="auth-input"
            type="text"
            value={this.state.emailOrPhone}
            id="emailOrPhone"
            name="emailOrPhone"
            placeholder="EMAIL/ PHONE NUMBER"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="password"
            value={this.state.password}
            id="password"
            name="password"
            placeholder="PASSWORD"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <Link to="/forgot" className="forgot-resend-link">
            Forgot...
          </Link>
          <button className="next-btn">NEXT</button>
        </form>
      </PurpleBackground>
    );
  }
}

export default Login;
