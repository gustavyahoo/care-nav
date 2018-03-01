import React from 'react';
import { PurpleBackground } from './common';

const SplashScreen = props => (
  <PurpleBackground className="purple-bg">
    <div className="splash-container">
      <div className="html-logo">
        <div className="inner" />
      </div>
      <div className="app-name-containerr">
        <h1 className="app-name">Care Nav</h1>
      </div>
    </div>
  </PurpleBackground>
);

export default SplashScreen;
