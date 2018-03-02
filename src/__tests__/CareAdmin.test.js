import React from 'react';
import { mount, shallow } from 'enzyme';
import CareAdmin from '../components/CareAdmin';
import { MemoryRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <CareAdmin />
  </Router>
);
const wrapper = mount(TestComponent);

it('renders without crashing', () => {
  shallow(TestComponent);
});

it('has all the required components', () => {
  expect(wrapper.find('.auth-heading')).toHaveClassName('auth-heading');
  expect(wrapper.find('.auth-heading')).toHaveText('Create Care_Admin profile');
  expect(wrapper.find('.auth-heading')).toHaveTagName('h2');
  expect(wrapper.find('#avatar')).toHaveValue('');
  expect(wrapper.find(CareAdmin).instance().state).toEqual({
    name: '',
    avatar: '',
    social: '',
    emailOrPhone: ''
  });
});

it('confirm form works', () => {
  const onChange = jest.fn();
  const eventCode = {
    target: { name: 'avatar', value: 'type-value' }
  };
  const input = wrapper.find('#avatar');
  input.simulate('change', eventCode);
  expect(wrapper.find(CareAdmin).instance().state.avatar).toEqual('type-value');

  eventCode.target.name = 'name';
  const inputName = wrapper.find('#name');
  inputName.simulate('change', eventCode);
  expect(wrapper.find(CareAdmin).instance().state.name).toEqual('type-value');

  eventCode.target.name = 'social';
  const inputSocial = wrapper.find('#social');
  inputSocial.simulate('change', eventCode);
  expect(wrapper.find(CareAdmin).instance().state.social).toEqual('type-value');

  eventCode.target.name = 'emailOrPhone';
  const inputEmailOrPhone = wrapper.find('#emailOrPhone');
  inputEmailOrPhone.simulate('change', eventCode);
  expect(wrapper.find(CareAdmin).instance().state.emailOrPhone).toEqual(
    'type-value'
  );

  const submitEvent = { preventDefault: jest.fn(), data: {} };
  const form = wrapper.find('form').at(0);
  form.simulate('submit', submitEvent);

  expect(submitEvent.preventDefault).toBeCalled();
});
