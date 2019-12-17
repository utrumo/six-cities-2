import {UrlPath, DEFAULT_NUMBER_VALUE, SortingVariants} from '../../shared/const.js';
import makeCamelCaseObject from '../../utils/camel-case-object.js';
import {
  getCurrentOfferId,
  getCurrentLocation,
  getCurrentOfferCityName,
  getLocations
} from './selectors.js';

const ActionType = {
  CHANGE_CURRENT_OFFER_ID: `CHANGE_CURRENT_OFFER_ID`,
  ADD_OFFERS: `ADD_OFFERS`,
  ADD_COMMENTS: `ADD_COMMENTS`,
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_SORT_ORDER: `CHANGE_SORT_ORDER`
};

const ActionCreator = {
  changeCurrentOfferId(id) {
    return {
      type: ActionType.CHANGE_CURRENT_OFFER_ID,
      payload: id
    };
  },

  addOffers(offers) {
    return {
      type: ActionType.ADD_OFFERS,
      payload: makeCamelCaseObject(offers)
    };
  },

  addComments(comments) {
    return {
      type: ActionType.ADD_COMMENTS,
      payload: makeCamelCaseObject(comments)
    };
  },

  changeLocation(location) {
    return {
      type: ActionType.CHANGE_LOCATION,
      payload: location
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
  checkCurrentOfferId(requestedOfferId) {
    return (dispatch, getState) => {
      const currentOfferId = getCurrentOfferId(getState());
      if (currentOfferId !== requestedOfferId) {
        dispatch(ActionCreator.changeCurrentOfferId(requestedOfferId));
      }
    };
  },

  loadOffers() {
    return (dispatch, _gateState, api) => (
      api
      .get(UrlPath.HOTELS)
      .then((response) => {
        dispatch(ActionCreator.addOffers(response.data));
      })
    );
  },

  checkCurrentLocationOnOfferPage() {
    return (dispatch, getState) => {
      const state = getState();
      const currentLocation = getCurrentLocation(state);
      const offerLocation = getCurrentOfferCityName(state);

      if (currentLocation !== offerLocation) {
        dispatch(ActionCreator.changeLocation(offerLocation));
      }
    };
  },

  checkCurrentLocationOnMainPage() {
    return (dispatch, getState) => {
      const state = getState();
      const currentLocation = getCurrentLocation(state);

      if (!currentLocation) {
        const locations = getLocations(state);
        const randomIndex = Math.floor(Math.random() * locations.length);
        const location = locations[randomIndex];
        dispatch(ActionCreator.changeLocation(location));
      }
    };
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
    case ActionType.CHANGE_CURRENT_OFFER_ID: return Object.assign({}, state, {
      currentOfferId: action.payload
    });

    case ActionType.ADD_OFFERS: return Object.assign({}, state, {
      offers: action.payload
    });

    case ActionType.ADD_COMMENTS: return Object.assign({}, state, {
      offersReviews: action.payload
    });

    case ActionType.CHANGE_LOCATION: return Object.assign({}, state, {
      currentLocation: action.payload
    });

    case ActionType.CHANGE_SORT_ORDER: return Object.assign({}, state, {
      sortOrder: action.payload
    });
  }

  return state;
};

export {ActionType, ActionCreator, Operation, reducer};
