import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const NewPatientRightNav = props => (
  <div className="right-mobile-nav">
    <h3>Add to</h3>
    <ul>
      <li>Group tags</li>
      <li>Hernia Surgery</li>
      <li>Colon Surgery</li>
      <li>Research study</li>
    </ul>
    <h3>Add new</h3>
  </div>
);

class NewPatientForm extends React.Component {
  state = {
    rightCollapsed: true
  };
  render() {
    return (
      <Layout>
        <Layout>
          <Content className="main-content">
            <div className="new-msg-container">
              <div className="new-msg-top-row">
                <Link to="/mobile/patients">
                  <Icon type="left" />
                </Link>
                <h3 className="new-msg-label">New Patient form</h3>{' '}
                <Icon
                  onClick={() =>
                    this.setState({
                      rightCollapsed: !this.state.rightCollapsed
                    })
                  }
                  type="plus"
                />
              </div>
              <div className="new-msg-address-ctn">
                <p className="new-msg-label">Name:&nbsp;&nbsp;</p>
                <input className="new-msg-input" type="text" />
              </div>
              <div className="new-msg-address-ctn">
                <p className="new-msg-label">Email:&nbsp;&nbsp;</p>
                <input className="new-msg-input" type="text" />
              </div>
              <div className="new-msg-address-ctn">
                <p className="new-msg-label">Ph no:&nbsp;&nbsp;</p>
                <input className="new-msg-input" type="text" />
              </div>
              <div className="new-msg-address-ctn">
                <p className="new-msg-label">Sex:&nbsp;&nbsp;</p>
                <input className="new-msg-input" type="text" />
              </div>
            </div>
          </Content>
        </Layout>
        <Sider
          collapsedWidth="0"
          reverseArrow
          theme="light"
          collapsed={this.state.rightCollapsed}
          className="right-sidebar"
        >
          <NewPatientRightNav />
        </Sider>
      </Layout>
    );
  }
}

export default NewPatientForm;
