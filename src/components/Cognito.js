import React from 'react';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser
} from 'amazon-cognito-identity-js';

var poolData = {
  UserPoolId: 'ap-south-1_3tIm6y9SV',
  ClientId: '4b4pptscfb8mtegc5kk8cbqhs1'
};
var userPool = new CognitoUserPool(poolData);

// var attributeList = [];

// var dataEmail = {
//   Name: 'email',
//   Value: 'ajay.more15@apu.edu.in'
// };

// var dataName = {
//   Name: 'name',
//   Value: 'Ajay More'
// };

// var dataPhoneNumber = {
//   Name: 'phone_number',
//   Value: '+918095937179'
// };
// var attributeEmail = new CognitoUserAttribute(dataEmail);
// var attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

// attributeList.push(attributeEmail);
// attributeList.push(dataName);
// attributeList.push(attributePhoneNumber);

class SignUp extends React.Component {
  state = {
    user: {
      username: '',
      password: '',
      name: ''
    },
    displaySignUp: true,
    confirmationCode: ''
  };
  handleChange = e => {
    this.setState({
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };
  _signUp = () => {
    const { user } = this.state;
    let attributeList = [];

    const dataEmail = {
      Name: 'email',
      Value: user.username
    };

    const dataName = {
      Name: 'name',
      Value: user.name
    };

    const dataPhoneNumber = {
      Name: 'phone_number',
      Value: user.username
    };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);

    console.log(attributePhoneNumber, dataName);

    attributeList.push(attributePhoneNumber);
    attributeList.push(dataName);

    userPool.signUp(
      user.username,
      user.password,
      attributeList,
      null,
      (err, result) => {
        if (err) {
          console.log(err);
          if (err.code === 'UsernameExistsException') {
            alert('User already exists');
            this.setState({
              displaySignUp: false
            });
          }
          return;
        }
        this.setState({
          displaySignUp: false
        });
        const cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
      }
    );
  };
  _confirmUser = () => {
    const { user, confirmationCode } = this.state;
    const User = new CognitoUser({
      Username: user.username,
      Pool: userPool
    });
    User.confirmRegistration(confirmationCode, true, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      return;
    });
  };
  render() {
    const { displaySignUp, user, confirmationCode } = this.state;
    if (displaySignUp) {
      return (
        <div>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={user.name}
            placeholder="Name"
          />
          <br />
          <input
            type="text"
            name="username"
            onChange={this.handleChange}
            value={user.username}
            placeholder="email/phone number"
          />
          <br />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={user.password}
            placeholder="password"
          />
          <button onClick={this._signUp}>Sign Up</button>
        </div>
      );
    }
    return (
      <div>
        <input
          type="text"
          name="confirmationCode"
          onChange={e => this.setState({ [e.target.name]: e.target.value })}
          value={confirmationCode}
          placeholder="Cofirmation code"
        />
        <br />
        <button onClick={this._confirmUser}>Confirm</button>
      </div>
    );
  }
}

class Cognito extends React.Component {
  render() {
    return (
      <div>
        <SignUp />
      </div>
    );
  }
}

export default Cognito;
