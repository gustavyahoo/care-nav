import React from 'react';
import { mount, shallow } from 'enzyme';
import SplashScreen from '../components/SplashScreen';
import { HashRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <SplashScreen />
  </Router>
);

const wrapper = mount(TestComponent);

describe('<SplashScreen />', () => {
  it('renders without crashing', () => {
    shallow(TestComponent);
  });
  it('has correct title', () => {
    expect(wrapper.find('.app-name')).toHaveText('Care Nav');
  });
});
