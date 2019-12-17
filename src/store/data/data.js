import {DEFAULT_NUMBER_VALUE, SortingVariants} from '../../shared/const.js';
import makeCamelCaseObject from '../../utils/camel-case-object.js';

const ActionType = {
  ADD_OFFERS: `ADD_OFFERS`,
  ADD_COMMENTS: `ADD_COMMENTS`,
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFER_ID: `CHANGE_CURRENT_OFFER_ID`,
  CHANGE_SORT_ORDER: `CHANGE_SORT_ORDER`
};

const ActionCreator = {
  addOffers(offers) {
    return {
      type: ActionType.ADD_OFFERS,
      payload: makeCamelCaseObject(offers)
    };
  },

  addComments(mock) {
    return {
      type: ActionType.ADD_COMMENTS,
      payload: makeCamelCaseObject(mock)
    };
  },

  changeLocation(location) {
    return {
      type: ActionType.CHANGE_LOCATION,
      payload: location
    };
  },

  changeCurrentOfferId(id) {
    return {
      type: ActionType.CHANGE_CURRENT_OFFER_ID,
      payload: id
    };
  },

  changeSortOrder(order) {
    return {
      type: ActionType.CHANGE_SORT_ORDER,
      payload: order
    };
  }
};

const Operation = {
  loadOffers() {
    return (dispatch, _gateState, api) => (
      api
      .get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.addOffers(response.data));
      })
    );
  }
};

const initState = {
  currentLocation: ``,
  currentOfferId: DEFAULT_NUMBER_VALUE,
  sortOrder: SortingVariants.POPULAR,
  offers: [],
  offersReviews: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION: return Object.assign({}, state, {
      currentLocation: action.payload
    });

    case ActionType.CHANGE_CURRENT_OFFER_ID: return Object.assign({}, state, {
      currentOfferId: action.payload
    });

    case ActionType.CHANGE_SORT_ORDER: return Object.assign({}, state, {
      sortOrder: action.payload
    });

    case ActionType.ADD_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case ActionType.ADD_COMMENTS: return Object.assign({}, state, {
      offersReviews: action.payload
    });
  }

  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
