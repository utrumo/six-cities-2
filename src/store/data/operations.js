import {ApiPath} from 'shared/const';
import * as Selector from './selectors';
import * as Action from './actions';

export {
  changeLocation,
  changeSortOrder,
  // addOffers, // for mocks in index.jsx
  // addComments, // for mocks in index.jsx
} from './actions';

export const checkCurrentOfferId = (requestedOfferId) => (dispatch, getState) => {
  const currentOfferId = Selector.getCurrentOfferId(getState());
  if (currentOfferId !== requestedOfferId) {
    dispatch(Action.changeCurrentOfferId(requestedOfferId));
  }
};

export const loadOffers = () => (dispatch, _gateState, api) => api
  .get(ApiPath.HOTELS)
  .then((response) => {
    dispatch(Action.addOffers(response.data));
  });

export const toggleFavoriteStatus = (offerId, favoriteStatus) => {
  const oppositFavoriteStatus = Number(!favoriteStatus);
  return (dispatch, _getState, api) => api
    .post(`${ApiPath.FAVORITE}/${offerId}/${(oppositFavoriteStatus)}`)
    .then((response) => {
      dispatch(Action.replaceOffer(response.data));
    })
    .catch(() => {});
};

export const checkCurrentLocationOnOfferPage = () => (dispatch, getState) => {
  const state = getState();
  const currentLocation = Selector.getCurrentLocation(state);
  const offerLocation = Selector.getCurrentOfferCityName(state);

  if (currentLocation !== offerLocation) {
    dispatch(Action.changeLocation(offerLocation));
  }
};

export const checkCurrentLocationOnMainPage = () => (dispatch, getState) => {
  const state = getState();
  const currentLocation = Selector.getCurrentLocation(state);

  if (!currentLocation) {
    const locations = Selector.getLocations(state);
    const randomIndex = Math.floor(Math.random() * locations.length);
    const location = locations[randomIndex];
    dispatch(Action.changeLocation(location));
  }
};
