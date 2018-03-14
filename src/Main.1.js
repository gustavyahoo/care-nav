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
import NewMessage from './components/NewMessage';
import NewPatientForm from './components/NewPatientForm';
import InboxSecondarySender from './components/InboxSecondarySender';
import InboxPatientMessage from './components/InboxPatientMessage';
import PatientName from './components/PatientName';
import EditPatientForm from './components/EditPatientForm';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './app.css';
import CoreLayout from './components/CoreLayout';
import { userPool } from './utils';
import { Button } from 'antd';
import ForgotPassword from './components/ForgotPassword';

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
    <li>
      <Link to="/three-column-layout">Three column layout</Link>
    </li>
    <li>
      <Link to="/inbox-secondary-sender">Inbox Sender Screen</Link>
    </li>
    <li>
      <Link to="/inbox-patient-message">Inbox Patient Message</Link>
    </li>
    <li>
      <Link to="/patient-name">Patient Name</Link>
    </li>
    <li>
      <Link to="/edit-patient-form">Edit patient form</Link>
    </li>
  </ul>
);

class App extends Component {
  render() {
    const userId = userPool.getCurrentUser().getUsername();
    return (
      <Router>
        <div>
          <div>
            Login Id: {userId}&nbsp;&nbsp;<Button
              onClick={e => {
                userPool.getCurrentUser().signOut();
                this.props.history.push('/login');
              }}
            >
              Logout
            </Button>
          </div>
          <br />
          <Route exact path="/" component={Nav} />
          <Route path="/screen-one" component={SplashScreen} />
          <Route path="/login" component={Login} />
          <Route path="/login/confirm" component={Confirm} />
          <Route path="/login/forgot" component={ForgotPassword} />
          <Route path="/care-space" component={CareSpace} />
          <Route path="/care-admin" component={CareAdmin} />
          <Route path="/care-invite" component={CareInvite} />
          <Route path="/top-nav" component={TopNav} />
          <Route path="/care-members" component={CareMembers} />
          <Route path="/care-teams" component={CareTeams} />
          <Route path="/care-topics" component={CareTopics} />
          <Route path="/care-all" component={CareAll} />
          <Route path="/three-column-layout" component={CoreLayout} />
          <Route path="/inbox/new-message" component={NewMessage} />
          <Route path="/inbox/new-patient-form" component={NewPatientForm} />
          <Route
            path="/inbox-secondary-sender"
            component={InboxSecondarySender}
          />
          <Route
            path="/inbox-patient-message"
            component={InboxPatientMessage}
          />
          <Route path="/patient-name" component={PatientName} />
          <Route path="/edit-patient-form" component={EditPatientForm} />
        </div>
      </Router>
    );
  }
}

export default App;
