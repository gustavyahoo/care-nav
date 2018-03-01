import React from 'react';
import { mount, shallow } from 'enzyme';
import CareSpace from '../components/CareSpace';
import { MemoryRouter as Router } from 'react-router-dom';

const TestComponent = (
  <Router>
    <CareSpace />
  </Router>
);
const wrapper = mount(TestComponent);

it('renders without crashing', () => {
  shallow(TestComponent);
});

it('has all the required components', () => {
  expect(wrapper.find('.auth-heading')).toHaveClassName('auth-heading');
  expect(wrapper.find('.auth-heading')).toHaveText('Create a Care_Space');
  expect(wrapper.find('.auth-heading')).toHaveTagName('h2');
  expect(wrapper.find('#phFax')).toHaveValue('');
  expect(wrapper.find(CareSpace).instance().state).toEqual({
    name: '',
    type: '',
    address: '',
    phFax: ''
  });
});

it('confirm form works', () => {
  const onChange = jest.fn();
  const eventCode = {
    target: { name: 'type', value: 'type-value' }
  };
  const input = wrapper.find('#type');
  input.simulate('change', eventCode);
  expect(wrapper.find(CareSpace).instance().state.type).toEqual('type-value');

  eventCode.target.name = 'name';
  const inputName = wrapper.find('#name');
  inputName.simulate('change', eventCode);
  expect(wrapper.find(CareSpace).instance().state.name).toEqual('type-value');

  eventCode.target.name = 'address';
  const inputAddress = wrapper.find('#address');
  inputAddress.simulate('change', eventCode);
  expect(wrapper.find(CareSpace).instance().state.address).toEqual(
    'type-value'
  );

  eventCode.target.name = 'phFax';
  const inputPhFax = wrapper.find('#phFax');
  inputPhFax.simulate('change', eventCode);
  expect(wrapper.find(CareSpace).instance().state.phFax).toEqual('type-value');

  const submitEvent = { preventDefault: jest.fn(), data: {} };
  const form = wrapper.find('form').at(0);
  form.simulate('submit', submitEvent);

  expect(submitEvent.preventDefault).toBeCalled();
});
