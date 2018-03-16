import React from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const myTeams = [1, 2];
const otherTeams = [4, 5, 3];
const members = [1, 2, 3, 4];

const MyCareTeam = props => (
  <div className="new-msg-container">
    <div className="new-msg-top-row">
      <Link to="/mobile/inbox">
        <Icon type="left" />
      </Link>
      <h3 className="new-msg-label">Care teams</h3>
    </div>
    <div className="MyCareTeam-team-container">
      <div className="MyCareTeam-team-title">My teams</div>
      {myTeams.map(item => (
        <div key={item} className="MyCareTeam-team-row">
          <div className="MyCareTeam-team-item">Team {item}</div>
          <div className="MyCareTeam-team-item">Members</div>
          <div className="MyCareTeam-team-item">Edit/Delete</div>
        </div>
      ))}
    </div>
    <div className="MyCareTeam-team-container">
      <div className="MyCareTeam-team-title">Other teams</div>
      {otherTeams.map(item => (
        <div key={item} className="MyCareTeam-team-row">
          <div className="MyCareTeam-team-item">Team {item}</div>
          <div className="MyCareTeam-team-item">Members</div>
          <div className="MyCareTeam-team-item">Join/Message</div>
        </div>
      ))}
    </div>
    <div className="MyCareTeam-team-container">
      <div className="MyCareTeam-team-title">Members</div>
      {members.map(item => (
        <div key={item} className="MyCareTeam-team-row">
          <div className="MyCareTeam-team-item">Member {item}</div>
          <div className="MyCareTeam-team-item">Message</div>
        </div>
      ))}
    </div>
  </div>
);

export default MyCareTeam;
