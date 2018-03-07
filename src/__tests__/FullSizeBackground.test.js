import React from 'react';
import { mount, shallow } from 'enzyme';
import { FullSizeBackground } from '../components/common';

it('renders given color correctly', () => {
  shallow(<FullSizeBackground backgroundColor="#4b395a" />);
  expect(
    mount(<FullSizeBackground backgroundColor="#4b395a" />).props()
      .backgroundColor
  ).toEqual('#4b395a');
});
