import React from 'react';
import { Link } from 'react-router-dom';

class CareMembers extends React.Component {
  render() {
    return (
      <div className="care-table-container">
        <div className="care-button-container">
          <div className="care-table-header">CARE MEMBERS</div>
          <Link to="/add-care-member" className="add-btn">
            + ADD
          </Link>
        </div>
        <div className="care-table-content">
          <div className="care-table-titles">
            <div>Name</div>
            <div>Role</div>
            <div>Period</div>
            <div>Contact</div>
            <div>Edit</div>
          </div>
          <div className="care-table-rows">
            {[1, 2, 3, 4, 5, 6].map((item, key) => (
              <div key={key} className="care-table-row">
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CareMembers;
