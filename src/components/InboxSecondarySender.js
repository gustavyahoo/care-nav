import React from 'react';

import { Icon } from 'antd';
import { Link } from 'react-router-dom';

class InboxSecondarySender extends React.Component {
  render() {
    return (
      <div className="new-msg-container">
        <div className="new-msg-top-row">
          <Link to="/three-column-layout">
            <Icon type="left" />
          </Link>
          <h3 className="new-msg-label">Sender</h3>
          <Icon type="plus" />
        </div>
        <div className="new-msg-address-ctn">
          <p className="new-msg-label">Re : Patient&nbsp;&nbsp;</p>
        </div>
        <div className="new-msg-address-ctn">
          <p className="new-msg-label">Tags :&nbsp;&nbsp;</p>
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

export default InboxSecondarySender;
