import React from 'react';
import { Layout, Icon } from 'antd';
import MobileLeftNav from './MobileLeftNav';
import MobileRightNav from './MobileRightNav';
import Patients from './Patients';
import Inbox from './Inbox';
import { Route, NavLink, Redirect } from 'react-router-dom';
import MemberProfile from './MemberProfile';
import MyCareTeam from './MyCareTeam';
import Settings from './Settings';
import MyCareLibrary from './MyCareLibrary';
const { Header, Sider, Content } = Layout;

class Mobile extends React.Component {
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
          <MobileLeftNav
            {...this.props}
            closeLeft={() => this.setState({ leftCollapsed: true })}
          />
        </Sider>
        <Layout>
          {(`${this.props.match.url}/inbox` === this.props.location.pathname ||
            `${this.props.match.url}/patients` ===
              this.props.location.pathname) && (
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
          )}
          <Content className="main-content-mobile">
            <div className="inbox-patient-content">
              <Route
                exact
                path={`${this.props.match.url}`}
                render={props => (
                  <Redirect to={`${this.props.match.url}/inbox`} />
                )}
              />
              <Route path={`${this.props.match.url}/inbox`} component={Inbox} />
              <Route
                path={`${this.props.match.url}/patients`}
                component={Patients}
              />
              <Route
                path={`${this.props.match.url}/member-profile`}
                component={MemberProfile}
              />
              <Route
                path={`${this.props.match.url}/my-care-team`}
                component={MyCareTeam}
              />
              <Route
                path={`${this.props.match.url}/my-care-library`}
                component={MyCareLibrary}
              />
              <Route
                path={`${this.props.match.url}/settings`}
                component={Settings}
              />
            </div>
            {(`${this.props.match.url}/inbox` ===
              this.props.location.pathname ||
              `${this.props.match.url}/patients` ===
                this.props.location.pathname) && (
              <div className="inbox-patient-footer">
                <NavLink
                  to={`${this.props.match.url}/inbox`}
                  activeClassName="active-tab"
                >
                  Inbox
                </NavLink>
                <NavLink
                  to={`${this.props.match.url}/patients`}
                  activeClassName="active-tab"
                >
                  Patients
                </NavLink>
              </div>
            )}
          </Content>
        </Layout>
        <Sider
          collapsedWidth="0"
          reverseArrow
          theme="light"
          collapsed={this.state.rightCollapsed}
          className="right-sidebar"
        >
          <MobileRightNav {...this.props} />
        </Sider>
      </Layout>
    );
  }
}

export default Mobile;
