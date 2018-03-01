import React from 'react';
import { PurpleBackground } from './common';

class Confirm extends React.Component {
  state = {
    name: '',
    type: '',
    address: '',
    phFax: ''
  };

  _submit = e => {
    e.preventDefault();
    const { name, type, address, phFax } = this.state;
    console.log({ name, type, address, phFax });
  };
  render() {
    return (
      <PurpleBackground className="purple-bg">
        <form className="care-space-container" onSubmit={this._submit}>
          <h2 className="auth-heading">Create a Care_Space</h2>
          <input
            className="auth-input"
            type="text"
            value={this.state.name}
            id="name"
            name="name"
            placeholder="NAME"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="text"
            value={this.state.type}
            id="type"
            name="type"
            placeholder="TYPE"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="text"
            value={this.state.address}
            id="address"
            name="address"
            placeholder="ADDRESS"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            className="auth-input"
            type="text"
            value={this.state.phFax}
            id="phFax"
            name="phFax"
            placeholder="PH/FAX NUMBERS"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <button className="next-btn">NEXT</button>
        </form>
      </PurpleBackground>
    );
  }
}

export default Confirm;
