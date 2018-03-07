import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../components/Login';
import { MemoryRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <Login />
  </Router>
);

it('renders without crashing', () => {
  shallow(TestComponent);
});
