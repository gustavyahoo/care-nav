import React from 'react';
import { mount, shallow } from 'enzyme';
import Confirm, { ConfirmContainer, Resend } from '../components/Confirm';
import { Heading } from '../components/common';

it('renders without crashing', () => {
  shallow(<Confirm />);
  shallow(<ConfirmContainer />);
  shallow(<Resend />);
});

it('has all the required components', () => {
  const wrapper = mount(<Confirm />);
  expect(wrapper.find(Heading)).toHaveStyleRule('color', '#c9c3ba');
  expect(wrapper.find(Heading)).toHaveText('Confirm');
  expect(wrapper.find(Heading)).toHaveTagName('styled.h2');
  expect(wrapper).toHaveState('confirmCode', '');
  expect(wrapper.find('#confirmCode').at(0)).toHaveValue('');
  expect(wrapper.find(Resend)).toHaveText('Resend');
});

it('confirm form works', () => {
  const wrapper = mount(<Confirm />);
  const onChange = jest.fn();
  const eventCode = {
    target: { name: 'confirmCode', value: '12345' }
  };
  const componentEmail = wrapper.find('input').at(0);
  componentEmail.simulate('change', eventCode);
  expect(wrapper.state().confirmCode).toEqual('12345');

  const submitEvent = { preventDefault: jest.fn(), data: {} };
  const form = wrapper.find('form').at(0);
  form.simulate('submit', submitEvent);
});
