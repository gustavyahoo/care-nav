import React from 'react';
import { mount, shallow } from 'enzyme';
import Login, {
  Heading,
  LoginContainer,
  Input,
  NextButton,
  Forgot
} from '../components/Login';

const wrapper = mount(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
  shallow(<Heading />);
  shallow(<LoginContainer />);
  shallow(<Input />);
  shallow(<NextButton />);
  shallow(<Forgot />);
});

it('has all the required components', () => {
  expect(wrapper.find(Heading)).toHaveStyleRule('color', '#c9c3ba');
  expect(wrapper.find(Heading)).toHaveText('Log in/Registration');
  expect(wrapper.find(Heading)).toHaveTagName('styled.h2');
  expect(wrapper).toHaveState('emailOrPhone', '');
  expect(wrapper).toHaveState('password', '');
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
  expect(wrapper.state().emailOrPhone).toEqual('the-value');
  const componentPassword = wrapper.find('input').at(1);
  componentPassword.simulate('change', eventPassword);
  expect(wrapper.state().password).toEqual('the-value');

  const submitEvent = { preventDefault: jest.fn() };
  const form = wrapper.find('form').at(0);
  form.simulate('submit', submitEvent);
  // expect(form.instance()._submit()).toHaveBeenCalledWith(submitEvent);
});
