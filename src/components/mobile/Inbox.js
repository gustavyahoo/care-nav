import React from 'react';
import { Icon } from 'antd';
import { Link, Route } from 'react-router-dom';
import NewMessage from './NewMessage';
import InboxSecondarySender from './InboxSecondarySender';
import InboxPatientMessage from './InboxPatientMessage';
const Inbox = props => (
  <div>
    <Route
      exact
      path={`${props.match.url}`}
      render={props => (
        <div
          className="tabs-content-height"
          style={{
            height: props.height
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => (
            <Link
              key={i}
              style={{
                height: 60,
                backgroundColor: '#a9a9a9',
                borderBottom: '1px solid #d6d6d6',
                display: 'block'
              }}
              to={`${props.match.url}/sender/${i}`}
            >
              {i}
            </Link>
          ))}
          <div className="action-btn-inbox-tab">
            <Link to={`${props.match.url}/new-message`}>
              <Icon type="plus-circle-o" />
            </Link>
          </div>
        </div>
      )}
    />
    <Route path={`${props.match.url}/new-message`} component={NewMessage} />
    <Route
      path={`${props.match.url}/sender/:id`}
      component={InboxSecondarySender}
    />
    <Route
      path={`${props.match.url}/patient-message/:id`}
      component={InboxPatientMessage}
    />
  </div>
);

export default Inbox;
