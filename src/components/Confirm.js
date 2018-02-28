import React from 'react';
import styled from 'styled-components';
import { PurpleBackground } from './SplashScreen';
import { NextButton, Input, Heading } from './common';

export const ConfirmContainer = styled.form`
  max-width: 300px;
  margin: 0 auto;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
`;

export const Resend = styled.p`
  text-align: right;
  color: #c9c3ba;
`;

class Confirm extends React.Component {
  state = {
    confirmCode: ''
  };

  _submit = e => {
    e.preventDefault();
    const { confirmCode } = this.state;
    console.log(confirmCode);
  };
  render() {
    return (
      <PurpleBackground>
        <ConfirmContainer onSubmit={this._submit}>
          <Heading>Confirm</Heading>
          <Input
            type="text"
            value={this.state.confirmCode}
            id="confirmCode"
            name="confirmCode"
            placeholder="CONFIRMATION CODE"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <Resend>Resend</Resend>
          <NextButton>NEXT</NextButton>
        </ConfirmContainer>
      </PurpleBackground>
    );
  }
}

export default Confirm;
