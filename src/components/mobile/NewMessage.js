import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

class NewMessage extends React.Component {
  render() {
    return (
      <div className="new-msg-container">
        <div className="new-msg-top-row">
          <Link to="/mobile/inbox">
            <Icon type="left" />
          </Link>
          <h3 className="new-msg-label">New Message</h3>
        </div>
        <div className="new-msg-address-ctn">
          <p className="new-msg-label">To:&nbsp;&nbsp;</p>
          <input className="new-msg-input" type="text" /> <Icon type="plus" />
        </div>
        <div className="new-msg-address-ctn">
          <p className="new-msg-label">Subject:&nbsp;&nbsp;</p>
          <input className="new-msg-input" type="text" />
        </div>
        <div className="new-msg-text">
          <input
            type="text"
            placeholder="Type text here"
            className="new-msg-input"
          />
          <Icon type="paper-clip" />
        </div>
      </div>
    );
  }
}

export default NewMessage;
