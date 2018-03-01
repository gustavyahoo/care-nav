import React, { Component } from 'react';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import Confirm from './components/Confirm';
import CareSpace from './components/CareSpace';
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
        </div>
      </Router>
    );
  }
}

export default App;
