import React, { Component } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Confirm from './components/Confirm';
import Mobile from './components/mobile';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withWindowSize } from 'react-fns';

import { userPool } from './utils';

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
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

    if (user && this.props.height > breakpoints.md) {
      return (
        <Switch>
          <Route exact path="/" render={props => <Redirect to="/pc" />} />
          <Route path="/pc" component={Mobile} />
        </Switch>
      );
    }

    if (user && this.props.height <= breakpoints.md) {
      return (
        <Switch>
          <Route exact path="/" render={props => <Redirect to="/mobile" />} />
          <Route path="/mobile" component={Mobile} />
        </Switch>
      );
    }

    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login-confirm" component={Confirm} />
        <Route render={props => <Redirect to="/login" />} />
      </Switch>
    );
  }
}

export default withWindowSize(App);
