import React from 'react';
import { mount, shallow } from 'enzyme';
import CareInvite from '../components/CareInvite';
import { MemoryRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <CareInvite />
  </Router>
);
const wrapper = mount(TestComponent);

it('renders without crashing', () => {
  shallow(TestComponent);
});

it('has all the required components', () => {
  expect(wrapper.find('.auth-heading')).toHaveClassName('auth-heading');
  expect(wrapper.find('.auth-heading')).toHaveText('Add/Invite Care_Members');
  expect(wrapper.find('.auth-heading')).toHaveTagName('h2');
  expect(wrapper.find('#accessPeriod')).toHaveValue('');
  expect(wrapper.find(CareInvite).instance().state).toEqual({
    name: '',
    role: '',
    accessPeriod: '',
    emailOrPhone: ''
  });
});

it('confirm form works', () => {
  const onChange = jest.fn();
  const eventCode = {
    target: { name: 'role', value: 'type-value' }
  };
  const input = wrapper.find('#role');
  input.simulate('change', eventCode);
  expect(wrapper.find(CareInvite).instance().state.role).toEqual('type-value');

  eventCode.target.name = 'name';
  const inputName = wrapper.find('#name');
  inputName.simulate('change', eventCode);
  expect(wrapper.find(CareInvite).instance().state.name).toEqual('type-value');

  eventCode.target.name = 'accessPeriod';
  const inputAccessPeriod = wrapper.find('#accessPeriod');
  inputAccessPeriod.simulate('change', eventCode);
  expect(wrapper.find(CareInvite).instance().state.accessPeriod).toEqual(
    'type-value'
  );

  eventCode.target.name = 'emailOrPhone';
  const inputEmailOrPhone = wrapper.find('#emailOrPhone');
  inputEmailOrPhone.simulate('change', eventCode);
  expect(wrapper.find(CareInvite).instance().state.emailOrPhone).toEqual(
    'type-value'
  );

  const submitEvent = { preventDefault: jest.fn(), data: {} };
  const form = wrapper.find('#care-invite-form');
  console.log(form);
  form.simulate('submit', submitEvent);

  expect(submitEvent.preventDefault).toBeCalled();
});
