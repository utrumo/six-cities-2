import axios from 'axios';
import {ResponseCode} from './shared/const.js';

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;

  const onFaill = (err) => {
    if (err.response.status === ResponseCode.UNAUTHORIZED) {
      onUnauthorized();
    }
    return Promise.reject(err);
  };

  api.interceptors.response.use(onSuccess, onFaill);

  return api;
};

export default createAPI;
