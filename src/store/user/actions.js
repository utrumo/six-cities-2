import makeCamelCaseObject from 'utils/camel-case-object';
import * as types from './types';

export const addUserProfile = (data) => ({
  type: types.ADD_USER_PROFILE,
  payload: makeCamelCaseObject(data),
});

export const changeAuthorizationStatus = (status) => ({
  type: types.CHANGE_AUTHORIZATION_FLAG,
  payload: status,
});

export const changeEmailValidationMessage = (message) => ({
  type: types.CHANGE_EMAIL_VALIDATION_ERROR,
  payload: message,
});
