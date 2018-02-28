import React from 'react';
import { mount, shallow } from 'enzyme';
import Login, {
  Heading,
  ConfirmContainer,
  Input,
  NextButton,
  Confirm
} from '../components/Confirm';

const wrapper = mount(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
  shallow(<Heading />);
  shallow(<ConfirmContainer />);
  shallow(<Input />);
  shallow(<NextButton />);
  shallow(<Confirm />);
});

it('has all the required components', () => {
  expect(wrapper.find(Heading)).toHaveStyleRule('color', '#c9c3ba');
  expect(wrapper.find(Heading)).toHaveText('Confirm');
  expect(wrapper.find(Heading)).toHaveTagName('styled.h2');
  expect(wrapper).toHaveState('confirmCode', '');
  expect(wrapper.find('#confirmCode').at(0)).toHaveValue('');
  expect(wrapper.find(Confirm)).toHaveText('Resend');
});

it('confirm form works', () => {
  const onChange = jest.fn();
  const eventCode = {
    target: { name: 'confirmCode', value: '12345' }
  };
  const componentEmail = wrapper.find('input').at(0);
  componentEmail.simulate('change', eventCode);
  expect(wrapper.state().confirmCode).toEqual('12345');

  const submitEvent = { preventDefault: jest.fn() };
  const form = wrapper.find('form').at(0);
  form.simulate('submit', submitEvent);
  // expect(form.instance()._submit()).toHaveBeenCalledWith(submitEvent);
});
