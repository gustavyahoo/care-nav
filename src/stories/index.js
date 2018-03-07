import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MemoryRouter as Router } from 'react-router-dom';

import { Button, Welcome } from '@storybook/react/demo';

import 'antd/dist/antd.css';
import '../app.css';

import withTests from './withTests';

// import CareSpace from '../components/CareSpace';
import SplashScreen, { Logo } from '../components/SplashScreen';
import { FullSizeBackground } from '../components/common';
import { LoginForm } from '../components/Login';
import CoreLayout from '../components/CoreLayout';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Splash Screen', module)
  .addDecorator(withTests('Logo', 'FullSizeBackground', 'SplashScreen'))
  .add('Care log', () => <Logo />)
  .add('Background', () => <FullSizeBackground backgroundColor="#4b395a" />)
  .add('SplashScreen', () => <SplashScreen />);

storiesOf('Login Screen', module).add('Form', () => (
  <Router>
    <LoginForm credentials={{ emailOrPhone: '', password: '' }} />
  </Router>
));

storiesOf('Core layout', module).add('Core', () => (
  <Router>
    <CoreLayout />
  </Router>
));
