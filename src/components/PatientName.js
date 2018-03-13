import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import avatar from '../avatar.png'

class PatientName extends React.Component {
  render() {
    return (
      <div className="new-msg-container">
        <div className="new-msg-top-row">
          <Link to="/three-column-layout">
            <Icon type="left" />
          </Link>
          <h3 className="new-msg-label">Patient Name</h3>
          <Icon type="plus" />
        </div>
        <div>
          <div className="PatientName-content-first-row">
            <div className="PatientName-avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="PatientName-personal-info">
              <div className="PatientName-personal-info-age-sex">
                <span>Age : </span>
                <span>Sex : </span>
              </div>
              <div>
                <span>Tags : </span>
              </div>
              <div>
                <span>Care path :</span>
              </div>
            </div>
          </div>
          <div className="PatientName-content-second-row">
            <div>
              <span>Call</span>
            </div>
            <div>
              <span>Video call</span>
            </div>
            <div>
              <span>Email</span>
            </div>
          </div>
        </div>
        <div className="PatientName-content-third-row">More details ...</div>

        <div className="PatientName-content-fourth-row">Recent activity</div>
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

export default PatientName;
