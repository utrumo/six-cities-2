import NameSpace from 'store/name-spaces';
import * as selectors from './selectors';

const NAME_SPACE = NameSpace.USER;

it(`getAuthorizationStatus should return correct status`, () => {
  const store = {
    [NAME_SPACE]: {
      isAuthorized: true,
      emailValidationError: ``,
      profile: {},
    },
  };
  expect(selectors.getAuthorizationStatus(store)).toEqual(true);
});

it(`getEmailValidationError shold return correct value`, () => {
  const error = `Error`;
  const store = {
    [NAME_SPACE]: {
      isAuthorized: false,
      emailValidationError: error,
      profile: {},
    },
  };
  expect(selectors.getEmailValidationError(store)).toEqual(error);
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
        isPro: false,
      },
    },
  };
  expect(selectors.getEmail(store)).toEqual(userEmail);
});
