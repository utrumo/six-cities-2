import {DEFAULT_NUMBER_VALUE, ActionTypes, SortingVariants} from '../shared/const.js';

const initState = {
  offers: [],
  offersReviews: [],
  currentLocation: ``,
  currentOfferId: DEFAULT_NUMBER_VALUE,
  sortOrder: SortingVariants.POPULAR
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case ActionTypes.LOAD_COMMENTS: return Object.assign({}, state, {
      offersReviews: action.payload
    });

    case ActionTypes.CHANGE_LOCATION: return Object.assign({}, state, {
      currentLocation: action.payload
    });

    case ActionTypes.CHANGE_CURRENT_OFFER_ID: return Object.assign({}, state, {
      currentOfferId: action.payload
    });

    case ActionTypes.CHANGE_SORT_ORDER: return Object.assign({}, state, {
      sortOrder: action.payload
    });
  }

  return state;
};

export default reducer;
