import React from 'react';
import { mount, shallow } from 'enzyme';
import SplashScreen from '../components/SplashScreen';
import { PurpleBackground } from '../components/common';
import { HashRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <SplashScreen />
  </Router>
);

it('renders without crashing', () => {
  shallow(TestComponent);
  shallow(<PurpleBackground />);

  const wrapper = mount(TestComponent);
  expect(wrapper.find('.app-name')).toHaveClassName('app-name');
  expect(wrapper.find('.app-name')).toHaveText('Care Nav');
});
