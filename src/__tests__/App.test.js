import React from 'react';
import { mount, shallow } from 'enzyme';
import App, { Nav } from '../App';

it('renders without crashing', () => {
  shallow(<App />);
  shallow(<Nav />);
});
