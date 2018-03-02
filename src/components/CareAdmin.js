import React from 'react';
import { PurpleBackground } from './common';

class CareAdmin extends React.Component {
  state = {
    name: '',
    avatar: '',
    social: '',
    emailOrPhone: ''
  };

  _submit = e => {
    e.preventDefault();
    const { name, avatar, social, emailOrPhone } = this.state;
    console.log({ name, avatar, social, emailOrPhone });
  };
  render() {
    return (
      <PurpleBackground className="purple-bg">
        <form className="care-space-container" onSubmit={this._submit}>
          <h2 className="care-admin auth-heading">Create Care_Admin profile</h2>
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
            value={this.state.avatar}
            id="avatar"
            name="avatar"
            placeholder="AVATAR"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="text"
            value={this.state.social}
            id="social"
            name="social"
            placeholder="SOCIAL"
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
          <button className="next-btn">NEXT</button>
        </form>
      </PurpleBackground>
    );
  }
}

export default CareAdmin;
