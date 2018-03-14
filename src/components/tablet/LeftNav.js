import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { userPool } from '../../utils';

class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-medical-practice">Medical Practice</h1>

        <ul className="left-menu-items">
          <li>
            <Link to="/home/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/home/patients">Patients</Link>
          </li>
          <li>
            <Link to="my-care-team">My care team</Link>
          </li>
          <li>
            <Link to="my-care-library">My care library</Link>
          </li>
        </ul>
        <div className="bottom-left-nav">
          <Link to="settings">Settings</Link>
          <br />
          <h3>Member</h3>
          <Link to="/edit-profile">Edit Profile</Link>
          <br />
          <a
            onClick={e => {
              userPool.getCurrentUser().signOut();
              this.props.history.push('/login');
            }}
          >
            Logout
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(LeftNav);
