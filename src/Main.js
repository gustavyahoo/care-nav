import React, { Component } from 'react';
import './app.css';
import { WindowSize } from 'react-fns';
import MobileLayout from './components/MobileLayout';
import TabLayout from './components/TabLayout';
// import { userPool } from './utils';
// onClick={e => {
//   userPool.getCurrentUser().signOut();
//   this.props.history.push('/login');
// }}

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};

class App extends Component {
  render() {
    return (
      <WindowSize
        render={({ width, height }) => {
          if (width > breakpoints.md) {
            return <TabLayout {...this.props} />;
          } else {
            return <MobileLayout {...this.props} />;
          }
        }}
      />
    );
  }
}

export default App;
