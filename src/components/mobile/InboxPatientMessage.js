import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const PatientChannel = props => <div>PatientChannel</div>;
const InternalChannel = props => <div>InternalChannel</div>;

class Tabs extends React.Component {
  state = {
    activeTab: 'patientChannel'
  };

  render() {
    const { activeTab } = this.state;
    return (
      <div className="Tabs-container">
        <div className="Tabs-container-headers">
          <div
            onClick={() => this.setState({ activeTab: 'patientChannel' })}
            className={activeTab === 'patientChannel' ? 'Tabs-active-tab' : ''}
          >
            Patient channel
          </div>
          <div
            onClick={() => this.setState({ activeTab: 'internalChannel' })}
            className={activeTab === 'internalChannel' ? 'Tabs-active-tab' : ''}
          >
            Internal channel
          </div>
        </div>
        <div>
          {activeTab === 'patientChannel' ? (
            <PatientChannel />
          ) : (
            <InternalChannel />
          )}
        </div>
      </div>
    );
  }
}

class InboxPatientMessage extends React.Component {
  render() {
    return (
      <div className="new-msg-container">
        <div className="new-msg-top-row">
          <Link to="/mobile/inbox">
            <Icon type="left" />
          </Link>
          <h3 className="new-msg-label">Patient message</h3>
          <Icon type="plus" />
        </div>
        <div>
          <Tabs />
        </div>
        <div className="new-msg-text">
          <input
            type="text"
            placeholder="Type text here"
            className="new-msg-input"
          />
          <Icon type="paper-clip" />
        </div>
      </div>
    );
  }
}

export default InboxPatientMessage;
