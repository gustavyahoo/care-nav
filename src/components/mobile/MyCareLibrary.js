import React from 'react';
import { Icon } from 'antd';
import { Link, Route, Redirect, NavLink } from 'react-router-dom';

const BottomNav = props => (
  <div className="inbox-patient-footer">
    <NavLink
      to="/mobile/my-care-library/care-messages"
      activeClassName="active-tab"
    >
      Care Messages
    </NavLink>
    <NavLink
      to="/mobile/my-care-library/care-topics"
      activeClassName="active-tab"
    >
      Care Topics
    </NavLink>
    <NavLink
      to="/mobile/my-care-library/care-paths"
      activeClassName="active-tab"
    >
      Care Paths
    </NavLink>
  </div>
);

const CareMessages = props => (
  <div className="new-msg-container">
    <div className="new-msg-top-row">
      <Link to="/mobile/inbox">
        <Icon type="left" />
      </Link>
      <h3 className="new-msg-label">Care Messages</h3>
      <Icon type="plus" />
    </div>
    <BottomNav />
  </div>
);

const CareTopics = props => (
  <div className="new-msg-container">
    <div className="new-msg-top-row">
      <Link to="/mobile/inbox">
        <Icon type="left" />
      </Link>
      <h3 className="new-msg-label">Care Topics</h3>
      <Icon type="plus" />
    </div>
    <BottomNav />
  </div>
);

const CarePaths = props => (
  <div className="new-msg-container">
    <div className="new-msg-top-row">
      <Link to="/mobile/inbox">
        <Icon type="left" />
      </Link>
      <h3 className="new-msg-label">Care Paths</h3>
      <Icon type="plus" />
    </div>
    <BottomNav />
  </div>
);

const MyCareLibrary = props => (
  <div>
    <Route
      exact
      path={props.match.url}
      render={props => <Redirect to={`${props.match.url}/care-messages`} />}
    />
    <Route path={`${props.match.url}/care-messages`} component={CareMessages} />
    <Route path={`${props.match.url}/care-topics`} component={CareTopics} />
    <Route path={`${props.match.url}/care-paths`} component={CarePaths} />
  </div>
);

export default MyCareLibrary;
