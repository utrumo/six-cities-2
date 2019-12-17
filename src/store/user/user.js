import {UrlPath} from '../../shared/const.js';
import makeCamelCaseObject from '../../utils/camel-case-object.js';
import {transformEmailError} from '../../utils/transform-messages.js';

const ActionType = {
  ADD_USER_PROFILE: `ADD_USER_PROFILE`,
  CHANGE_AUTHORIZATION_FLAG: `CHANGE_AUTHORIZATION_FLAG`,
  CHANGE_EMAIL_VALIDATION_ERROR: `CHANGE_EMAIL_VALIDATION_ERROR`
};

const ActionCreator = {
  addUserProfile(data) {
    return {
      type: ActionType.ADD_USER_PROFILE,
      payload: makeCamelCaseObject(data)
    };
  },

  changeAuthorizationStatus(status) {
    return {
      type: ActionType.CHANGE_AUTHORIZATION_FLAG,
      payload: status
    };
  },

  changeEmailValidationMessage(message) {
    return {
      type: ActionType.CHANGE_EMAIL_VALIDATION_ERROR,
      payload: message
    };
  }
};

const Operation = {
  authorize(email, password) {
    return (dispatch, _gateState, api) => (
      api
      .post(UrlPath.LOGIN, {email, password})
      .then(({data}) => {
        dispatch(ActionCreator.addUserProfile(makeCamelCaseObject(data)));
        dispatch(ActionCreator.changeAuthorizationStatus(true));
      })
      .catch(({response: {data: {error}}}) => {
        dispatch(ActionCreator.changeEmailValidationMessage(transformEmailError(error)));
        dispatch(ActionCreator.changeAuthorizationStatus(false));
      })
    );
  }
};

const initState = {
  isAuthorized: false,
  emailValidationError: ``,
  profile: {}
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.ADD_USER_PROFILE: return Object.assign({}, state, {
      profile: action.payload
    });

    case ActionType.CHANGE_AUTHORIZATION_FLAG: return Object.assign({}, state, {
      isAuthorized: action.payload
    });

    case ActionType.CHANGE_EMAIL_VALIDATION_ERROR: return Object.assign({}, state, {
      emailValidationError: action.payload
    });
  }

  return state;
};

export {
  ActionCreator,
  Operation,
  ActionType,
  reducer
};
