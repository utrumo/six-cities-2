import makeCamelCaseObject from 'utils/camel-case-object';
import {transformEmailError} from 'utils/transform-messages';
import {ApiPath} from 'shared/const';
import * as actions from './actions';

export {
  changeAuthorizationStatus,
  changeEmailValidationMessage,
} from './actions';

export const authorize = (email, password) => (dispatch, _gateState, api) => (
  api
    .post(ApiPath.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(actions.addUserProfile(makeCamelCaseObject(data)));
      dispatch(actions.changeAuthorizationStatus(true));
    })
    .catch(({response: {data: {error}}}) => {
      dispatch(actions.changeEmailValidationMessage(transformEmailError(error)));
      dispatch(actions.changeAuthorizationStatus(false));
    })
);
export const loadProfile = () => (dispatch, _gateState, api) => (
  api
    .get(ApiPath.LOGIN)
    .then(({data}) => {
      dispatch(actions.addUserProfile(makeCamelCaseObject(data)));
      dispatch(actions.changeAuthorizationStatus(true));
    })
    .catch(()=> {})
);
