import React from 'react';
import { mount, shallow } from 'enzyme';
import TopNav from '../components/TopNav';

it('renders without crashing', () => {
  shallow(<TopNav />);
});
