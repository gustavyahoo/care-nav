import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import avatar from '../../avatar.png';

class MemberProfile extends React.Component {
  render() {
    return (
      <div className="new-msg-container">
        <div className="new-msg-top-row">
          <Link to="/mobile/patients">
            <Icon type="left" />
          </Link>
          <h3 className="new-msg-label">Member Name</h3>
          <Icon type="plus" />
        </div>
        <div>
          <div className="MemberProfile-content-first-row">
            <div className="MemberProfile-avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="MemberProfile-personal-info">
              <div className="MemberProfile-personal-info-age-sex">
                <span className="MemberProfile-personal-info-titles">
                  Email :{' '}
                </span>
              </div>
              <div className="MemberProfile-personal-info-age-sex">
                <span className="MemberProfile-personal-info-titles">
                  Phone no :{' '}
                </span>
              </div>
              <div>
                <span className="MemberProfile-personal-info-titles">
                  Password :{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="MemberProfile-content-second-row">
            <div className="bold-text-center">Member Tags</div>
            <div className="tags">
              <span className="bold-text">Folders:</span>
            </div>
            <div className="tags">
              <span className="bold-text">Channels:</span>
            </div>
            <div className="tags">
              <span className="bold-text">Patient Groups:</span>
            </div>
            <div className="tags">
              <span className="bold-text">Teams:</span>
            </div>
          </div>
        </div>
        <div className="edit-msg-text">
          <span className="bold-text-center">Edit</span>
        </div>
      </div>
    );
  }
}

export default MemberProfile;
