import React, { Component } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Confirm from './components/Confirm';
import { Route, Switch, Redirect } from 'react-router-dom';
import './app.css';
import Main from './App';

import {
  CognitoUser,
  CognitoUserAttribute,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';

import { userPool } from './utils';

const logout = () => {
  userPool.getCurrentUser().signOut();
};

class App extends Component {
  state = {
    app: false
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ app: true });
    }, 1000);
  }
  render() {
    const user = userPool.getCurrentUser();

    if (!this.state.app) {
      return <SplashScreen />;
    }

    if (user) {
      return (
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/login-confirm" component={Confirm} />
        <Route render={props => <Redirect to="/login" />} />
      </Switch>
    );
  }
}

export default App;
