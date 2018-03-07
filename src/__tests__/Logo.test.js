import React from 'react';
import { mount, shallow } from 'enzyme';
import Logo from '../components/SplashScreen';

it('renders logo correctly', () => {
  shallow(<Logo />);
});
