import React, { Component } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Confirm from './components/Confirm';
import CareSpace from './components/CareSpace';
import CareAdmin from './components/CareAdmin';
import TopNav from './components/TopNav';
import CareInvite from './components/CareInvite';
import CareMembers from './components/CareMembers';
import CareTeams from './components/CareTeams';
import CareTopics from './components/CareTopics';
import CareAll from './components/CareAll';
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
    <li>
      <Link to="/care-members">Care members</Link>
    </li>
    <li>
      <Link to="/care-teams">Care Teams</Link>
    </li>
    <li>
      <Link to="/care-topics">Care Topics</Link>
    </li>
    <li>
      <Link to="/care-all">Care All</Link>
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
          <Route path="/care-members" component={CareMembers} />
          <Route path="/care-teams" component={CareTeams} />
          <Route path="/care-topics" component={CareTopics} />
          <Route path="/care-all" component={CareAll} />
        </div>
      </Router>
    );
  }
}

export default App;
