import React, { Component } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Confirm from './components/Confirm';
import CareSpace from './components/CareSpace';
import CareAdmin from './components/CareAdmin';
import TopNav from './components/TopNav';
import CareInvite from './components/CareInvite';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './app.css';

export const Nav = props => (
  <ul>
    <li>
      <Link to="/screen-one">Splash Screen</Link>
    </li>
    <li>
      <Link to="/login">Login Screen</Link>
    </li>
    <li>
      <Link to="/confirm">Confirm screen</Link>
    </li>
    <li>
      <Link to="/care-space">Care_Space</Link>
    </li>
    <li>
      <Link to="/care-admin">Care_Admin</Link>
    </li>
    <li>
      <Link to="/care-invite">Care_Invite</Link>
    </li>
    <li>
      <Link to="/top-nav">Top Navigation</Link>
    </li>
  </ul>
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Nav} />
          <Route path="/screen-one" component={SplashScreen} />
          <Route path="/login" component={Login} />
          <Route path="/confirm" component={Confirm} />
          <Route path="/care-space" component={CareSpace} />
          <Route path="/care-admin" component={CareAdmin} />
          <Route path="/care-invite" component={CareInvite} />
          <Route path="/top-nav" component={TopNav} />
        </div>
      </Router>
    );
  }
}

export default App;
