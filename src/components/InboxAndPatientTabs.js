import React from 'react';
import { Tabs } from 'antd';
import { withWindowSize } from 'react-fns';
import Inbox from './Inbox';
import Patients from './Patients';
const TabPane = Tabs.TabPane;

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
