import React from 'react';
import { mount, shallow } from 'enzyme';
import SplashScreen, {
  AppName,
  PurpleBackground
} from '../components/SplashScreen';

it('renders without crashing', () => {
  shallow(<SplashScreen />);
  shallow(<AppName />);
  shallow(<PurpleBackground />);

  const wrapper = mount(<SplashScreen />);
  expect(wrapper.find(AppName)).toHaveStyleRule('color', '#874b3f');
  expect(wrapper.find(AppName)).toHaveText('Care_Nav');
});
