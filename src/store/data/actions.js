import makeCamelCaseObject from 'utils/camel-case-object.js';
import * as Type from './types';

export const changeCurrentOfferId = (id) => ({
  type: Type.CHANGE_CURRENT_OFFER_ID,
  payload: id,
});

export const addOffers = (offers) => ({
  type: Type.ADD_OFFERS,
  payload: makeCamelCaseObject(offers),
});

export const addComments = (comments) => ({
  type: Type.ADD_COMMENTS,
  payload: makeCamelCaseObject(comments),
});

export const replaceOffer = (offer) => ({
  type: Type.REPLACE_OFFER,
  payload: makeCamelCaseObject(offer),
});

export const changeLocation = (location) => ({
  type: Type.CHANGE_LOCATION,
  payload: location,
});

export const changeSortOrder = (order) => ({
  type: Type.CHANGE_SORT_ORDER,
  payload: order,
});
