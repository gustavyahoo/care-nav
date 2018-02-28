import React from 'react';
import styled from 'styled-components';
import { PurpleBackground } from './SplashScreen';
import { NextButton, Input, Heading } from './common';

export const LoginContainer = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
`;

export const Forgot = styled.p`
  text-align: right;
  color: #c9c3ba;
`;

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
      <PurpleBackground>
        <LoginContainer onSubmit={this._submit}>
          <Heading>Log in/Registration</Heading>
          <Input
            type="text"
            value={this.state.emailOrPhone}
            id="emailOrPhone"
            name="emailOrPhone"
            placeholder="EMAIL/ PHONE NUMBER"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <Input
            last
            type="password"
            value={this.state.password}
            id="password"
            name="password"
            placeholder="PASSWORD"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <Forgot>Forgot...</Forgot>
          <NextButton>NEXT</NextButton>
        </LoginContainer>
      </PurpleBackground>
    );
  }
}

export default Login;
