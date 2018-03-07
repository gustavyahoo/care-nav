import React from 'react';
import { FullSizeBackground } from './common';

export const Logo = props => (
  <div className="splash-container">
    <div className="html-logo">
      <div className="inner" />
    </div>
    <div className="app-name-containerr">
      <h1 className="app-name">Care Nav</h1>
    </div>
  </div>
);

const SplashScreen = props => (
  <FullSizeBackground backgroundColor="#4b395a">
    <Logo />
  </FullSizeBackground>
);

export default SplashScreen;
