import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component {
  render() {
    return (
      <div className="top-nav-container">
        <h1 className="nav-header">Medical Practice</h1>
        <ul className="top-nav-list">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/care-team">CareTeam</Link>
          </li>
          <li>
            <Link to="/care">Care</Link>
          </li>
          <li>
            <Link to="/library">Library</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <div className="top-nav-seperator">|</div>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default TopNav;
