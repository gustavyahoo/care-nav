import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withWindowSize } from 'react-fns';
import { Link } from 'react-router-dom';
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
    this.setState({
      leftCollapsed: !this.state.leftCollapsed
    });
  };
  toggleRight = () => {
    this.setState({
      rightCollapsed: !this.state.rightCollapsed
    });
  };
  componentWillReceiveProps(newProps) {
    this.setState({
      leftCollapsed: newProps.width < breakpoints.sm,
      rightCollapsed: newProps.width < breakpoints.sm
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
          <h1 className="header-medical-practice">Medical Practice</h1>
          <div className="member-profile">
            <h3>Member</h3>
            <Link to="/edit-profile">Edit Profile</Link>
          </div>
          <ul className="left-menu-items">
            <li>
              <Link to="my-care-team">My care team</Link>
            </li>
            <li>
              <Link to="my-care-library">My care library</Link>
            </li>
            <li>
              <Link to="settings">Settings</Link>
            </li>
          </ul>
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
          <Content className="main-content">Main Content</Content>
        </Layout>
        <Sider
          collapsedWidth="0"
          reverseArrow
          theme="light"
          collapsed={this.state.rightCollapsed}
          className="right-sidebar"
        >
          right sidebar
        </Sider>
      </Layout>
    );
  }
}

export default withWindowSize(CoreLayout);
