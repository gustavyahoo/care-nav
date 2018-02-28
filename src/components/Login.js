import React from 'react';
import styled from 'styled-components';
import { PurpleBackground } from './SplashScreen';

export const Heading = styled.h2`
  color: #c9c3ba;
  font-family: sans-serif;
  text-align: center;
`;

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

export const NextButton = styled.button`
  background-color: #b6874e;
  color: #fff;
  border-radius: 10px;
  padding: 15px 10px;
  font-size: 0.7em;
  box-shadow: -1px 6px 0px -4px rgba(0, 0, 0, 0.25);
  border: 1px solid #61784a;
  outline: none;
  margin-top: 50px;
`;

export const Input = styled.input`
  text-align: center;
  margin-bottom: ${props => (props.last ? 0 : '10px')};
  padding: 15px 10px;
  border-radius: 10px;
  color: #61784a;
  font-size: 0.7em;
  box-shadow: -1px 6px 0px -4px rgba(0, 0, 0, 0.25);
  border: 1px solid #61784a;
  outline: none;
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
