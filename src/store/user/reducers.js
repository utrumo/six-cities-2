import * as types from './types';

export const initState = {
  isAuthorized: false,
  emailValidationError: ``,
  profile: {},
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case types.CHANGE_AUTHORIZATION_FLAG: return {...state, isAuthorized: action.payload};
    case types.CHANGE_EMAIL_VALIDATION_ERROR: return {...state, emailValidationError: action.payload};
    case types.ADD_USER_PROFILE: return {...state, profile: action.payload};
    default: return state;
  }
};
