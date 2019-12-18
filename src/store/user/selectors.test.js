import {
  getAuthorizationStatus,
  getEmailValidationError,
  getEmail
} from './selectors.js';
import NameSpace from '../name-spaces.js';

const NAME_SPACE = NameSpace.USER;

it(`getAuthorizationStatus should return correct status`, () => {
  const store = {
    [NAME_SPACE]: {
      isAuthorized: true,
      emailValidationError: ``,
      profile: {}
    }
  };
  expect(getAuthorizationStatus(store)).toEqual(true);
});

it(`getEmailValidationError shold return correct value`, () => {
  const error = `Error`;
  const store = {
    [NAME_SPACE]: {
      isAuthorized: false,
      emailValidationError: error,
      profile: {}
    }
  };
  expect(getEmailValidationError(store)).toEqual(error);
});

it(`getEmail shold return correct user email`, () => {
  const userEmail = `test@test.ru`;
  const store = {
    [NAME_SPACE]: {
      isAuthorized: true,
      emailValidationError: ``,
      profile: {
        id: 1,
        email: userEmail,
        name: `test`,
        avatarUrl: `/static/avatar/3.jpg`,
        isPro: false
      }
    }
  };
  expect(getEmail(store)).toEqual(userEmail);
});
