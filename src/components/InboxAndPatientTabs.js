import React from 'react';
import { Tabs, Icon } from 'antd';
import { withWindowSize } from 'react-fns';
import { Link } from 'react-router-dom';
const TabPane = Tabs.TabPane;

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
const Patients = props => (
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
      <Link to="/inbox/new-patient-form">
        <Icon type="plus-circle-o" />
      </Link>
    </div>
  </div>
);

class InboxAndPatientTabs extends React.Component {
  render() {
    return (
      <div>
        <Tabs tabPosition="bottom">
          <TabPane tab="Inbox" key="inbox">
            <Inbox height={this.props.height - 108} />
          </TabPane>
          <TabPane tab="Patients" key="patients">
            <Patients height={this.props.height - 108} />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default withWindowSize(InboxAndPatientTabs);
