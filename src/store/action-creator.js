import {ActionTypes} from '../shared/const.js';
import makeCamelCaseObject from '../utils/camel-case-object.js';

const ActionCreator = {
  loadOffers(mock) {
    return {
      type: ActionTypes.LOAD_OFFERS,
      payload: makeCamelCaseObject(mock)
    };
  },

  loadComments(mock) {
    return {
      type: ActionTypes.LOAD_COMMENTS,
      payload: makeCamelCaseObject(mock)
    };
  },

  changeLocation(location) {
    return {
      type: ActionTypes.CHANGE_LOCATION,
      payload: location
    };
  },

  changeCurrentOfferId(id) {
    return {
      type: ActionTypes.CHANGE_CURRENT_OFFER_ID,
      payload: id
    };
  }
};

export default ActionCreator;
