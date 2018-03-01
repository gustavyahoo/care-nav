import React from 'react';
import { mount, shallow } from 'enzyme';
import Confirm from '../components/Confirm';
import { MemoryRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <Confirm />
  </Router>
);
const wrapper = mount(TestComponent);

it('renders without crashing', () => {
  shallow(TestComponent);
});

it('has all the required components', () => {
  expect(wrapper.find('.auth-heading')).toHaveClassName('auth-heading');
  expect(wrapper.find('.auth-heading')).toHaveText('Confirm');
  expect(wrapper.find('.auth-heading')).toHaveTagName('h2');
  // expect(wrapper).toHaveState('confirmCode', '');
  expect(wrapper.find('#confirmCode')).toHaveValue('');
  expect(wrapper.find('.forgot-resend-link').at(0)).toHaveText('Resend');
});

it('confirm form works', () => {
  const onChange = jest.fn();
  const eventCode = {
    target: { name: 'confirmCode', value: '12345' }
  };
  const componentEmail = wrapper.find('input').at(0);
  componentEmail.simulate('change', eventCode);
  expect(wrapper.find(Confirm).instance().state.confirmCode).toEqual('12345');

  const submitEvent = { preventDefault: jest.fn(), data: {} };
  const form = wrapper.find('form').at(0);
  form.simulate('submit', submitEvent);

  expect(submitEvent.preventDefault).toBeCalled();
});
