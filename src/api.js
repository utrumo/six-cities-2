import axios from 'axios';
import {ActionCreator} from './store/data/data.js';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFaill = (err) => {
    if (err.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFaill);

  return api;
};

export default createAPI;
