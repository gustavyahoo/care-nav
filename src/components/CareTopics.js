import React from 'react';
import { Link } from 'react-router-dom';

class CareMembers extends React.Component {
  render() {
    return (
      <div className="care-table-container">
        <div className="care-button-container">
          <div className="care-table-header">CARE TOPICS</div>
          <Link to="/add-care-member" className="add-btn">
            + ADD
          </Link>
        </div>
        <div className="care-table-topics-content">
          <div className="care-table-topics-titles">
            <div>Name</div>
            <div>Category</div>
            <div>Author/ editor</div>
            <div>Date created/ updated</div>
            <div>Edit/ delete</div>
          </div>
          <div className="care-table-topics-rows">
            {[1, 2, 3, 4, 5, 6].map((item, key) => (
              <div key={key} className="care-table-topics-row">
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
