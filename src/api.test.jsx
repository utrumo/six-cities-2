import MockAdapter from 'axios-mock-adapter';
import createAPI from './api.js';
import {UrlPath, ResponseCode} from './shared/const.js';

it(`Should call callback if get ${ResponseCode.UNAUTHORIZED} on request`, () => {
  const cb = jest.fn();
  const api = createAPI(cb);
  const apiMock = new MockAdapter(api);
  apiMock.onGet(UrlPath.FAVORITES).reply(ResponseCode.UNAUTHORIZED);
  return api
    .get(UrlPath.FAVORITES)
    .catch(() => {
      expect(cb).toHaveBeenCalledTimes(1);
    });
});
