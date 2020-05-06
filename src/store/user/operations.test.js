import MockAdapter from 'axios-mock-adapter';

import {ApiPath, ResponseCode} from 'shared/const';
import createAPI from 'api';
import * as types from './types';
import * as operations from './operations';

let api;
let apiMock;
let dispatch;

beforeEach(() => {
  api = createAPI(jest.fn());
  apiMock = new MockAdapter(api);
  dispatch = jest.fn();
});

describe(`autorize`, () => {
  const password = `password`;

  it(`Should dispatch correct actions if autorization sucess`, () => {
    const mockResponse = {
      "id": 1,
      "email": `test@test.ru`,
      "name": `test`,
      "avatar_url": `/static/avatar/3.jpg`,
      "is_pro": false,
    };
    apiMock.onPost(ApiPath.LOGIN).reply(ResponseCode.OK, mockResponse);

    const email = `test@test.ru`;
    return operations.authorize(email, password)(dispatch, jest.fn(), api).then(() => {
      const expectedProfileAction = {
        type: types.ADD_USER_PROFILE,
        payload: {
          id: 1,
          email: `test@test.ru`,
          name: `test`,
          avatarUrl: `/static/avatar/3.jpg`,
          isPro: false,
        },
      };
      expect(dispatch).toHaveBeenNthCalledWith(1, expectedProfileAction);

      const expectedChangeAuthorizationAction = {
        type: types.CHANGE_AUTHORIZATION_FLAG,
        payload: true,
      };
      expect(dispatch).toHaveBeenNthCalledWith(2, expectedChangeAuthorizationAction);
    });
  });

  it(`Should dispatch correct actions if autorization failed`, () => {
    const mosckResponse = {"error": `child "email" fails because ["email" must be a valid email]`};
    apiMock.onPost(ApiPath.LOGIN).reply(ResponseCode.BAD_REQUEST, mosckResponse);

    const email = `test@test.test`;
    return operations.authorize(email, password)(dispatch, jest.fn(), api).then(() => {
      const expectedProfileAction = {
        type: types.CHANGE_EMAIL_VALIDATION_ERROR,
        payload: `Must be a valid email`,
      };
      expect(dispatch).toHaveBeenNthCalledWith(1, expectedProfileAction);

      const expectedChangeAuthorizationAction = {
        type: types.CHANGE_AUTHORIZATION_FLAG,
        payload: false,
      };
      expect(dispatch).toHaveBeenNthCalledWith(2, expectedChangeAuthorizationAction);
    });
  });
});

describe(`loadProfile`, () => {
  it(`Should dispatch correct actions if authorized`, () => {
    const mockResponse = {
      'id': 1,
      'email': `test@test.ru`,
      'name': `test`,
      'avatar_url': `/static/avatar/8.jpg`,
      'is_pro': false,
    };
    apiMock.onGet(ApiPath.LOGIN).reply(ResponseCode.OK, mockResponse);

    return operations.loadProfile()(dispatch, jest.fn(), api).then(() => {
      const expectedProfileAction = {
        type: types.ADD_USER_PROFILE,
        payload: {
          id: 1,
          email: `test@test.ru`,
          name: `test`,
          avatarUrl: `/static/avatar/8.jpg`,
          isPro: false,
        },
      };
      expect(dispatch).toHaveBeenNthCalledWith(1, expectedProfileAction);

      const expectedChangeAuthorizationAction = {
        type: types.CHANGE_AUTHORIZATION_FLAG,
        payload: true,
      };
      expect(dispatch).toHaveBeenNthCalledWith(2, expectedChangeAuthorizationAction);
    });
  });

  it(`Should't dispatch anything if is not authorized`, () => {
    const mockResponse = {error: `You are not logged in or you do not have permission to this page.`};
    apiMock.onGet(ApiPath.LOGIN).reply(ResponseCode.UNAUTHORIZED, mockResponse);

    return operations.loadProfile()(dispatch, jest.fn(), api).then(() => {
      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
