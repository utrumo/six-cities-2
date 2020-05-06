import * as types from './types';
import * as actions from './actions';

it(`addUserProfiler: Should add user profile data`, () => {
  const profile = {
    "id": 1,
    "email": `test@test.ru`,
    "name": `test`,
    "avatar_url": `/static/avatar/3.jpg`,
    "is_pro": false,
  };
  const expectedResult = {
    type: types.ADD_USER_PROFILE,
    payload: {
      id: 1,
      email: `test@test.ru`,
      name: `test`,
      avatarUrl: `/static/avatar/3.jpg`,
      isPro: false,
    },
  };

  const result = actions.addUserProfile(profile);
  expect(result).toEqual(expectedResult);
});

it(`changeAuthorizationStatus: Should return correct action with given payload`, () => {
  expect(actions.changeAuthorizationStatus(true)).toEqual({
    type: types.CHANGE_AUTHORIZATION_FLAG,
    payload: true,
  });
});

it(`changeEmailValidationMessage: Should return correct action with given payload`, () => {
  const message = `Error`;
  expect(actions.changeEmailValidationMessage(message)).toEqual({
    type: types.CHANGE_EMAIL_VALIDATION_ERROR,
    payload: message,
  });
});
