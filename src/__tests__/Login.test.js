import React from 'react';
import { mount, shallow } from 'enzyme';
import Login from '../components/Login';
import { HashRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <Login />
  </Router>
);

it('renders without crashing', () => {
  shallow(TestComponent);
});

const wrapper = mount(TestComponent);

it('has all the required components', () => {
  expect(wrapper.find('.auth-heading')).toHaveClassName('auth-heading');
  expect(wrapper.find('.auth-heading')).toHaveText('Log in/Registration');
  expect(wrapper.find('.auth-heading')).toHaveTagName('h2');
  expect(wrapper.find(Login).instance().state).toEqual({
    emailOrPhone: '',
    password: ''
  });
  expect(wrapper.find('#emailOrPhone').at(0)).toHaveValue('');
  expect(wrapper.find('#password').at(0)).toHaveValue('');
});

it('login form works', () => {
  const onChange = jest.fn();
  const eventEmail = {
    target: { name: 'emailOrPhone', value: 'the-value' }
  };
  const eventPassword = {
    target: { name: 'password', value: 'the-value' }
  };
  const componentEmail = wrapper.find('input').at(0);
  componentEmail.simulate('change', eventEmail);
  expect(wrapper.find(Login).instance().state.emailOrPhone).toEqual(
    'the-value'
  );
  const componentPassword = wrapper.find('input').at(1);
  componentPassword.simulate('change', eventPassword);
  expect(wrapper.find(Login).instance().state.password).toEqual('the-value');

  const submitEvent = { preventDefault: jest.fn() };
  const form = wrapper.find('form').at(0);
  form.simulate('submit', submitEvent);
  // expect(form.instance()._submit()).toHaveBeenCalledWith(submitEvent);
});
