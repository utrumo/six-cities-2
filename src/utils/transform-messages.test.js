import {transformEmailError} from './transform-messages';

const TestMessages = {
  EMPTY_EMAIL: `child "email" fails because ["email" is not allowed to be empty]`,
  WRONG_EMAIL: `child "email" fails because ["email" must be a valid email]`
};

it(`Should correct transform EMPTY_EMAIL message`, () => {
  expect(transformEmailError(TestMessages.EMPTY_EMAIL))
    .toEqual(`Is not allowed to be empty`);
});

it(`Should correct transform WRONG_EMAIL message`, () => {
  expect(transformEmailError(TestMessages.WRONG_EMAIL))
    .toEqual(`Must be a valid email`);
});
