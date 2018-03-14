import React from 'react';
import { Layout, Icon } from 'antd';
import MobileLeftNav from './mobile/MobileLeftNav';
import MobileRightNav from './mobile/MobileRightNav';
import InboxAndPatientTabs from './InboxAndPatientTabs';
const { Header, Sider, Content } = Layout;

class CoreLayout extends React.Component {
  state = {
    leftCollapsed: true,
    rightCollapsed: true
  };
  toggleLeft = () => {
    this.setState({
      leftCollapsed: !this.state.leftCollapsed
    });
  };
  toggleRight = () => {
    this.setState({
      rightCollapsed: !this.state.rightCollapsed
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          collapsedWidth="0"
          trigger={null}
          collapsible
          collapsed={this.state.leftCollapsed}
          className="left-sidebar"
          style={{ height: this.props.height }}
        >
          <MobileLeftNav />
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Icon
              style={{ fontSize: '2rem', marginLeft: 10 }}
              className="trigger"
              type={'bars'}
              onClick={this.toggleLeft}
            />
            <div style={{ backgroundColor: 'red' }} />
            <Icon
              style={{ fontSize: '2rem', marginRight: 10 }}
              className="trigger"
              type={'profile'}
              onClick={this.toggleRight}
            />
          </Header>
          <Content className="main-content">
            <InboxAndPatientTabs />
          </Content>
        </Layout>
        <Sider
          collapsedWidth="0"
          reverseArrow
          theme="light"
          collapsed={this.state.rightCollapsed}
          className="right-sidebar"
        >
          <MobileRightNav />
        </Sider>
      </Layout>
    );
  }
}

export default CoreLayout;
