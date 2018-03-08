import React from 'react';
import { Link } from 'react-router-dom';

class MobileLeftNav extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-medical-practice">Medical Practice</h1>
        <ul className="left-menu-items">
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/patients">Patients</Link>
          </li>
          <li>
            <Link to="/my-care-team">My care team</Link>
          </li>
          <li>
            <Link to="/my-care-library">My care library</Link>
          </li>
        </ul>
        <div className="bottom-left-nav">
          <Link to="settings">Settings</Link>
          <div className="member-profile">
            <h3>Member</h3>
            <Link to="/edit-profile">Edit Profile</Link>
          </div>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    );
  }
}

export default MobileLeftNav;
