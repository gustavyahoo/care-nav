import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const Settings = props => (
  <div className="new-msg-container">
    <div className="new-msg-top-row">
      <Link to="/mobile/inbox">
        <Icon type="left" />
      </Link>
      <h3 className="new-msg-label">Settings</h3>
    </div>
  </div>
);

export default Settings;
