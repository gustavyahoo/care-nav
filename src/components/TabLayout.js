import React from 'react';
import { Layout, Icon } from 'antd';
import LeftNav from './tablet/LeftNav';
import RightNav from './tablet/RightNav';
import Inbox from './Inbox';
import Patients from './Patients';
import { Route } from 'react-router-dom';
import { FullSizeBackground } from './common';
import { withWindowSize } from 'react-fns';
const { Header, Sider, Content } = Layout;

class CoreLayout extends React.Component {
  state = {
    leftCollapsed: false,
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
      <FullSizeBackground backgroundColor="#fff">
        <Layout>
          <Sider
            collapsedWidth="0"
            trigger={null}
            collapsible
            collapsed={this.state.leftCollapsed}
            className="left-sidebar"
            style={{ height: this.props.height }}
          >
            <LeftNav />
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
              <Route
                exact
                path={`${this.props.match.url}`}
                render={props => (
                  <Inbox {...props} height={this.props.height} />
                )}
              />
              <Route
                path={`${this.props.match.url}/inbox`}
                render={props => (
                  <Inbox {...props} height={this.props.height - 60} />
                )}
              />
              <Route
                path={`${this.props.match.url}/patients`}
                render={props => (
                  <Patients {...props} height={this.props.height - 60} />
                )}
              />
            </Content>
          </Layout>
          <Sider
            collapsedWidth="0"
            reverseArrow
            theme="light"
            collapsed={this.state.rightCollapsed}
            className="right-sidebar"
          >
            <RightNav />
          </Sider>
        </Layout>
      </FullSizeBackground>
    );
  }
}

export default withWindowSize(CoreLayout);
