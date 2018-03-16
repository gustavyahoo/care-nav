import React from 'react';
import { Link } from 'react-router-dom';
import { userPool } from '../../utils';
import { withRouter } from 'react-router-dom';

class MobileLeftNav extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header-medical-practice">Medical Practice</h1>
        <div className="member-profile">
          <h3>Member</h3>
          <Link
            to={`${this.props.match.url}/member-profile`}
            onClick={this.props.closeLeft}
          >
            Edit Profile
          </Link>
        </div>
        <ul className="left-menu-items">
          <li>
            <Link
              to={`${this.props.match.url}/my-care-team`}
              onClick={this.props.closeLeft}
            >
              My care team
            </Link>
          </li>
          <li>
            <Link
              to={`${this.props.match.url}/my-care-library`}
              onClick={this.props.closeLeft}
            >
              My care library
            </Link>
          </li>
          <li>
            <Link
              to={`${this.props.match.url}/settings`}
              onClick={this.props.closeLeft}
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="bottom-left-nav">
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

export default withRouter(MobileLeftNav);
