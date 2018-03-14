import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
const Inbox = props => (
  <div
    className="tabs-content-height"
    style={{
      height: props.height
    }}
  >
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
      <div
        key={i}
        style={{
          height: 60,
          backgroundColor: '#a9a9a9',
          borderBottom: '1px solid #d6d6d6'
        }}
      >
        {i}
      </div>
    ))}
    <div className="action-btn-inbox-tab">
      <Link to="/inbox/new-message">
        <Icon type="plus-circle-o" />
      </Link>
    </div>
  </div>
);

export default Inbox;
