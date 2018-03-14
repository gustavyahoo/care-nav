import React from 'react';

class RightNav extends React.Component {
  render() {
    return (
      <div className="right-mobile-nav">
        <h3>Search</h3>
        <h3>Unassigned</h3>
        <h3>Folder tags</h3>
        <ul>
          <li>Favorites</li>
          <li>Archived</li>
          <li>Folder 1</li>
          <li>Folder 2</li>
        </ul>
        <h3>Channel tags</h3>
        <ul>
          <li>Internal</li>
          <li>Research</li>
          <li>Issue</li>
        </ul>
      </div>
    );
  }
}

export default RightNav;
