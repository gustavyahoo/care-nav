import React from 'react';
import { PurpleBackground } from './common';
import { Link } from 'react-router-dom';

class Confirm extends React.Component {
  state = {
    confirmCode: ''
  };

  _submit = e => {
    e.preventDefault();
    const { confirmCode } = this.state;
    console.log(confirmCode);
  };
  render() {
    return (
      <PurpleBackground className="purple-bg">
        <form className="confirm-container" onSubmit={this._submit}>
          <h1 className="auth-heading">Confirm</h1>
          <input
            className="auth-input"
            type="text"
            value={this.state.confirmCode}
            id="confirmCode"
            name="confirmCode"
            placeholder="CONFIRMATION CODE"
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <Link to="/resend" className="forgot-resend-link">
            Resend
          </Link>
          <button className="next-btn">NEXT</button>
        </form>
      </PurpleBackground>
    );
  }
}

export default Confirm;
