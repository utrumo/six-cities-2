import {initState, reducer} from './reducers';
import * as types from './types';

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual(initState);
});

it(`Reducer should replace profile by given value`, () => {
  const action = {
    type: types.ADD_USER_PROFILE,
    payload: {
      id: 1,
      email: `test@test.ru`,
      name: `test`,
      avatarUrl: `/static/avatar/3.jpg`,
      isPro: false,
    },
  };
  const state = {
    isAuthorized: true,
    emailValidationError: ``,
    profile: {},
  };
  const nextState = {
    isAuthorized: true,
    emailValidationError: ``,
    profile: {
      id: 1,
      email: `test@test.ru`,
      name: `test`,
      avatarUrl: `/static/avatar/3.jpg`,
      isPro: false,
    },
  };

  expect(reducer(state, action)).toEqual(nextState);
});

it(`Reducer should change isAuthorized flag by given value`, () => {
  const action = {
    type: types.CHANGE_AUTHORIZATION_FLAG,
    payload: false,
  };
  const state = {
    isAuthorized: true,
    emailValidationError: ``,
    profile: {},
  };
  const nextState = {
    isAuthorized: false,
    emailValidationError: ``,
    profile: {},
  };

  expect(reducer(state, action)).toEqual(nextState);
});

it(`Reducer should change emailValidationError flag by given value`, () => {
  const action = {
    type: types.CHANGE_EMAIL_VALIDATION_ERROR,
    payload: `Error`,
  };
  const state = {
    isAuthorized: false,
    emailValidationError: `Test`,
    profile: {},
  };
  const nextState = {
    isAuthorized: false,
    emailValidationError: `Error`,
    profile: {},
  };

  expect(reducer(state, action)).toEqual(nextState);
});
