import React from 'react';
import TopNav from './TopNav';
import CareTeams from './CareTeams';
import CareMembers from './CareMembers';
import CareTopics from './CareTopics';

class CareAll extends React.Component {
  render() {
    return (
      <div className="care-all-container">
        <TopNav />
        <br />
        <div className="full-row">
          <div className="half-box">
            <CareTeams />
          </div>
          <div className="half-box">
            <CareMembers />
          </div>
        </div>
        <br />
        <div className="full-row">
          <div className="half-box">
            <CareTopics />
          </div>
          <div className="half-box">
            <CareTopics />
          </div>
        </div>
      </div>
    );
  }
}

export default CareAll;
