import {DEFAULT_NUMBER_VALUE, SortingVariants} from 'shared/const.js';
import * as Type from './types';

const initState = {
  currentLocation: ``,
  currentOfferId: DEFAULT_NUMBER_VALUE,
  sortOrder: SortingVariants.POPULAR,
  offers: [],
  offersReviews: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case Type.CHANGE_CURRENT_OFFER_ID: return {...state, currentOfferId: action.payload};
    case Type.ADD_OFFERS: return {...state, offers: action.payload};
    case Type.ADD_COMMENTS: return {...state, offersReviews: action.payload};
    case Type.REPLACE_OFFER: return {...state, offers: state.offers.map((it) => (
      it.id === action.payload.id ? action.payload : it
    ))};
    case Type.CHANGE_LOCATION: return {...state, currentLocation: action.payload};
    case Type.CHANGE_SORT_ORDER: return {...state, sortOrder: action.payload};
    default: return state;
  }
};
