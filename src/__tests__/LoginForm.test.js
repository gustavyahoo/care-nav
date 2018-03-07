import React from 'react';
import { mount, shallow } from 'enzyme';
import { LoginForm, InnerForm } from '../components/Login';
import { MemoryRouter as Router } from 'react-router-dom';
import { Form, Field } from 'formik';

const props = {
  values: { emailOrPhone: '', password: '' },
  errors: {},
  touched: false,
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  handleSubmit: jest.fn(),
  isSubmitting: false
};

const TestComponent = (
  <Router>
    <InnerForm {...props} />
  </Router>
);

const wrapper = shallow(TestComponent);

describe('<LoginForm />', () => {
  it('has all the required elements', () => {
    expect(
      wrapper
        .dive()
        .dive()
        .find('.auth-heading')
    ).toHaveClassName('auth-heading');
    expect(
      wrapper
        .dive()
        .dive()
        .find('.auth-heading')
    ).toHaveText('Log in/Registration');
    expect(
      wrapper
        .dive()
        .dive()
        .find('.auth-heading')
    ).toHaveTagName('h1');
  });
});
