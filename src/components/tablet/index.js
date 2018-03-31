import React from 'react';
import axios from 'axios';
import { Layout, Icon, Form, Input, Button, message, Radio } from 'antd';
import { Route, NavLink, Redirect, Link } from 'react-router-dom';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
const { Header, Sider, Content } = Layout;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class SetupCareSpace extends React.Component {
  state = {
    Address: '',
    Name: '',
    PhFxNumber: '',
    Type: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios({
        url:
          'https://pqgcc4kvpk.execute-api.us-east-1.amazonaws.com/dev/carespaces/',
        headers: {
          'x-api-key': '72AvOQDZlM9N6dHSQDY2u5ebWG2uu0td3z0KkKdX',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: this.state,
        withCredentials: false
      });
      console.log(res.data);
      message.success(
        `CareSpace set up successfully with message topic with ID ${
          res.data.careSpaceId
        }`
      );
      this.setState({
        Address: '',
        Name: '',
        PhFxNumber: '',
        Type: ''
      });
    } catch (err) {
      console.log(err);
      message.error('Error occurred!');
    }
  };
  render() {
    return (
      <div style={{ padding: 25 }}>
        <Form onSubmit={this.handleSubmit} className="setup-patient-form">
          <FormItem>
            <Input
              size="large"
              placeholder="Address"
              onChange={e => this.setState({ Address: e.target.value })}
              value={this.state.Address}
            />
          </FormItem>
          <FormItem>
            <Input
              size="large"
              placeholder="Name"
              onChange={e => this.setState({ Name: e.target.value })}
              value={this.state.Name}
            />
          </FormItem>
          <FormItem>
            <Input
              size="large"
              placeholder="PhFxNumber"
              onChange={e => this.setState({ PhFxNumber: e.target.value })}
              value={this.state.PhFxNumber}
            />
          </FormItem>
          <FormItem>
            <Input
              size="large"
              placeholder="Type"
              onChange={e => this.setState({ Type: e.target.value })}
              value={this.state.Type}
            />
          </FormItem>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

class SetupPatient extends React.Component {
  state = {
    Email: '',
    Gender: '',
    Name: '',
    PhoneNumber: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios({
        url:
          'https://pqgcc4kvpk.execute-api.us-east-1.amazonaws.com/dev/carespaces/:careSpaceId/patients',
        headers: {
          'x-api-key': '72AvOQDZlM9N6dHSQDY2u5ebWG2uu0td3z0KkKdX',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: this.state,
        withCredentials: false
      });
      console.log(res.data);
      message.success(
        `Successfully set up the patient and subscribed to the CareSpace topic`
      );
      this.setState({
        Email: '',
        Gender: '',
        Name: '',
        PhoneNumber: ''
      });
    } catch (err) {
      console.log(err);
      message.error('Error occurred!');
    }
  };
  render() {
    return (
      <div style={{ padding: 25 }}>
        <Form onSubmit={this.handleSubmit} className="setup-patient-form">
          <FormItem>
            <Input
              type="email"
              size="large"
              placeholder="Email"
              onChange={e => this.setState({ Email: e.target.value })}
              value={this.state.Email}
            />
          </FormItem>
          <FormItem>
            Gender: &nbsp;&nbsp;
            <RadioGroup
              onChange={e => this.setState({ Gender: e.target.value })}
              value={this.state.Gender}
            >
              <Radio value={'M'}>M</Radio>
              <Radio value={'F'}>F</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem>
            <Input
              size="large"
              placeholder="Name"
              onChange={e => this.setState({ Name: e.target.value })}
              value={this.state.Name}
            />
          </FormItem>
          <FormItem>
            <Input
              size="large"
              placeholder="PhFxNumber"
              onChange={e => this.setState({ PhFxNumber: e.target.value })}
              value={this.state.PhFxNumber}
            />
          </FormItem>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

class Tablet extends React.Component {
  state = {
    leftCollapsed: false,
    rightCollapsed: false
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
  _sendMessage = async () => {
    try {
      const res = await axios({
        url:
          'https://pqgcc4kvpk.execute-api.us-east-1.amazonaws.com/dev/carespaces/:233232/patients/:33333/messages',
        headers: {
          'x-api-key': '72AvOQDZlM9N6dHSQDY2u5ebWG2uu0td3z0KkKdX',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        withCredentials: false
      });
      console.log(res.data);
      message.success(`Message published successfully!`);
    } catch (err) {
      console.log(err);
      message.error('Error occurred!');
    }
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
          <LeftNav
            {...this.props}
            closeLeft={() => this.setState({ leftCollapsed: true })}
          />
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
          <Content className="main-content-tablet">
            <ul>
              <li>
                <Link to={`${this.props.match.url}/setup-carespace`}>
                  Setup Carespace
                </Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}/setup-patient`}>
                  Setup Patient
                </Link>
              </li>
              <li>
                <Button onClick={this._sendMessage} type="primary">
                  Send Message
                </Button>
              </li>
            </ul>
            <Route
              path={`${this.props.match.url}/setup-carespace`}
              component={SetupCareSpace}
            />
            <Route
              path={`${this.props.match.url}/setup-patient`}
              component={SetupPatient}
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
          <RightNav {...this.props} />
        </Sider>
      </Layout>
    );
  }
}

export default Tablet;
