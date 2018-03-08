import React from 'react';
import { Layout, Icon } from 'antd';
import { withWindowSize } from 'react-fns';
import MobileLeftNav from './MobileLeftNav';
import MobileRightNav from './MobileRightNav';
import InboxAndPatientTabs from './InboxAndPatientTabs';
const { Header, Sider, Content } = Layout;

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};

class CoreLayout extends React.Component {
  state = {
    leftCollapsed: true,
    rightCollapsed: true
  };
  toggleLeft = () => {
    this.setState(
      {
        leftCollapsed: !this.state.leftCollapsed
      },
      () => {
        if (this.state.leftCollapsed) {
          this.forceUpdate();
        }
      }
    );
  };
  toggleRight = () => {
    this.setState(
      {
        rightCollapsed: !this.state.rightCollapsed
      },
      () => {
        if (this.state.rightCollapsed) {
          this.forceUpdate();
        }
      }
    );
  };
  componentWillReceiveProps(newProps) {
    this.setState({
      leftCollapsed: newProps.width < breakpoints.md,
      rightCollapsed: newProps.width < breakpoints.md
    });
  }
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

export default withWindowSize(CoreLayout);
