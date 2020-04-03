import {ActionType, ActionCreator, Operation, reducer} from './user.js';
import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api.js';
import {ApiPath, ResponseCode} from '../../shared/const.js';


describe(`ActionCreator`, () => {
  it(`addUserProfiler: Should add user profile data`, () => {
    const profile = {
      "id": 1,
      "email": `test@test.ru`,
      "name": `test`,
      "avatar_url": `/static/avatar/3.jpg`,
      "is_pro": false,
    };
    const expectedResult = {
      type: ActionType.ADD_USER_PROFILE,
      payload: {
        id: 1,
        email: `test@test.ru`,
        name: `test`,
        avatarUrl: `/static/avatar/3.jpg`,
        isPro: false,
      },
    };

    const result = ActionCreator.addUserProfile(profile);

    expect(result).toEqual(expectedResult);
  });

  it(`changeAuthorizationStatus: Should return correct action with given payload`, () => {
    expect(ActionCreator.changeAuthorizationStatus(true)).toEqual({
      type: ActionType.CHANGE_AUTHORIZATION_FLAG,
      payload: true,
    });
  });

  it(`changeEmailValidationMessage: Should return correct action with given payload`, () => {
    const message = `Error`;
    expect(ActionCreator.changeEmailValidationMessage(message)).toEqual({
      type: ActionType.CHANGE_EMAIL_VALIDATION_ERROR,
      payload: message,
    });
  });
});

describe(`Operation`, () => {
  it(`autorize: Should dispatch correct actions if autorization sucess`, () => {
    const email = `test@test.ru`;
    const password = `password`;
    const dispatch = jest.fn();
    const api = createAPI(jest.fn());
    const apiMock = new MockAdapter(api);
    const response = {
      "id": 1,
      "email": `test@test.ru`,
      "name": `test`,
      "avatar_url": `/static/avatar/3.jpg`,
      "is_pro": false,
    };
    const expectedProfileAction = {
      type: ActionType.ADD_USER_PROFILE,
      payload: {
        id: 1,
        email: `test@test.ru`,
        name: `test`,
        avatarUrl: `/static/avatar/3.jpg`,
        isPro: false,
      },
    };
    const expectedChangeAuthorizationAction = {
      type: ActionType.CHANGE_AUTHORIZATION_FLAG,
      payload: true,
    };

    apiMock
        .onPost(ApiPath.LOGIN)
        .reply(ResponseCode.OK, response);

    return Operation.authorize(email, password)(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, expectedProfileAction);
      expect(dispatch).toHaveBeenNthCalledWith(2, expectedChangeAuthorizationAction);
    });
  });

  it(`autorize: Should dispatch correct actions if autorization failed`, () => {
    const email = `test@test.test`;
    const password = `password`;
    const dispatch = jest.fn();
    const api = createAPI(jest.fn());
    const apiMock = new MockAdapter(api);
    const response = {
      "error": `child "email" fails because ["email" must be a valid email]`,
    };
    const expectedProfileAction = {
      type: ActionType.CHANGE_EMAIL_VALIDATION_ERROR,
      payload: `Must be a valid email`,
    };
    const expectedChangeAuthorizationAction = {
      type: ActionType.CHANGE_AUTHORIZATION_FLAG,
      payload: false,
    };

    apiMock
        .onPost(ApiPath.LOGIN)
        .reply(ResponseCode.BAD_REQUEST, response);

    return Operation.authorize(email, password)(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, expectedProfileAction);
      expect(dispatch).toHaveBeenNthCalledWith(2, expectedChangeAuthorizationAction);
    });
  });
});

describe(`Reducer`, () => {
  let initState;
  beforeEach(() => {
    initState = {
      isAuthorized: false,
      emailValidationError: ``,
      profile: {},
    };
  });


  it(`Reducer without additional parameters should return initial state`, () => {
    const state = undefined;
    expect(reducer(state, {})).toEqual(initState);
  });

  it(`Reducer should replace profile by given value`, () => {
    const action = {
      type: ActionType.ADD_USER_PROFILE,
      payload: {
        id: 1,
        email: `test@test.ru`,
        name: `test`,
        avatarUrl: `/static/avatar/3.jpg`,
        isPro: false,
      },
    };
    const nextState = {
      isAuthorized: false,
      emailValidationError: ``,
      profile: {
        id: 1,
        email: `test@test.ru`,
        name: `test`,
        avatarUrl: `/static/avatar/3.jpg`,
        isPro: false,
      },
    };

    expect(reducer(initState, action)).toEqual(nextState);
  });

  it(`Reducer should change isAuthorized flag by given value`, () => {
    const action = {
      type: ActionType.CHANGE_AUTHORIZATION_FLAG,
      payload: true,
    };
    const nextState = {
      isAuthorized: true,
      emailValidationError: ``,
      profile: {},
    };

    expect(reducer(initState, action)).toEqual(nextState);
  });

  it(`Reducer should change emailValidationError flag by given value`, () => {
    const action = {
      type: ActionType.CHANGE_EMAIL_VALIDATION_ERROR,
      payload: `Error`,
    };
    const nextState = {
      isAuthorized: false,
      emailValidationError: `Error`,
      profile: {},
    };

    expect(reducer(initState, action)).toEqual(nextState);
  });
});
