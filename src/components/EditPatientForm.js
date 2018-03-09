import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

class EditPatientForm extends React.Component {
  render() {
    return (
      <div className="new-msg-container">
        <div className="new-msg-top-row">
          <Link to="/three-column-layout">
            <Icon type="left" />
          </Link>
          <h3 className="new-msg-label">Edit Patient form</h3>{' '}
          <Icon type="plus" />
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
    );
  }
}

export default EditPatientForm;
