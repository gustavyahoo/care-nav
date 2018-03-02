import React from 'react';
import { PurpleBackground } from './common';
import { Link } from 'react-router-dom';

class CareInvite extends React.Component {
  state = {
    name: '',
    role: '',
    accessPeriod: '',
    emailOrPhone: ''
  };

  _submit = e => {
    e.preventDefault();
    const { name, role, social, emailOrPhone } = this.state;
    console.log({ name, role, social, emailOrPhone });
  };
  render() {
    return (
      <PurpleBackground className="purple-bg">
        <form
          className="care-space-container"
          id="care-invite-form"
          onSubmit={this._submit}
        >
          <h2 className="care-admin auth-heading">Add/Invite Care_Members</h2>
          <input
            className="auth-input"
            type="text"
            value={this.state.name}
            id="name"
            name="name"
            placeholder="NAME/NICK NAME"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="text"
            value={this.state.role}
            id="role"
            name="role"
            placeholder="SELECT ROLE"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="text"
            value={this.state.emailOrPhone}
            id="emailOrPhone"
            name="emailOrPhone"
            placeholder="EMAIL/PHONE NUMBER"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="text"
            value={this.state.accessPeriod}
            id="accessPeriod"
            name="accessPeriod"
            placeholder="ACESS PERIOD"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <Link to="/resend" className="forgot-resend-link">
            + Add more
          </Link>
          <button className="next-btn">NEXT</button>
        </form>
      </PurpleBackground>
    );
  }
}

export default CareInvite;
