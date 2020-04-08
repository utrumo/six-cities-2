import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LoginForm} from './login-form.jsx';

configure({adapter: new Adapter()});

it(`Should call onSubmit if form submit`, () => {
  const onSubmit = jest.fn();
  const email = `test@test.ru`;
  const password = `password`;
  const wrapper = shallow(
      <LoginForm
        emailValidationError=""
        onEmailChange={jest.fn()}
        onSubmit={onSubmit}
      />
  );
  wrapper.setState({email, password});
  const form = wrapper.find(`form`);
  form.simulate(`submit`, {preventDefault: jest.fn()});
  expect(onSubmit).toHaveBeenNthCalledWith(1, email, password);
});

it(`Should call onEmailChange with empty string if email changed`, () => {
  const onEmailChange = jest.fn();
  const wrapper = shallow(
      <LoginForm
        emailValidationError="Error"
        onEmailChange={onEmailChange}
        onSubmit={jest.fn()}
      />
  );

  const emailInput = wrapper.find(`[type="email"]`);
  emailInput.simulate(`change`, {target: {name: `email`}});

  expect(onEmailChange).toHaveBeenNthCalledWith(1, ``);
});
