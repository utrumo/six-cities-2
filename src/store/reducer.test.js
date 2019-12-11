import reducer from './reducer.js';
import {DEFAULT_NUMBER_VALUE, ActionTypes} from '../shared/const.js';

let initState;
beforeEach(() => {
  initState = {
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    offers: [],
    offersReviews: []
  };
});

it(`Reducer without additional parameters should return initial state`, () => {
  const state = undefined;
  expect(reducer(state, {})).toEqual(initState);
});

it(`Reducer should replace offers by given in payload`, () => {
  const offers = [{
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    previewImage: `img/room.jpg`,
    images: [`img/room.jpg`],
    title: `Wood and stone place`,
    description: `Relax, rejuvenate and unplug.`,
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.2,
    price: 80,
    type: `apartment`,
    bedrooms: 3,
    maxAdults: 6,
    goods: [`Laptop friendly workspace`],
    host: {
      id: 2,
      name: `Oleg`,
      isPro: false,
      avatarUrl: `img/avatar-max.jpg`
    }
  }];
  const action = {
    type: ActionTypes.LOAD_OFFERS,
    payload: offers
  };
  const nextState = {
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    offers,
    offersReviews: []
  };

  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should replace offersReviews by given in payload`, () => {
  const offersReviews = [{
    id: 2,
    comments: [{
      id: 1,
      user: {
        id: 12,
        isPro: true,
        name: `Isaac`,
        avatarUrl: `img/3.jpg`
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-24T08:29:32.094Z`
    }]
  }];
  const action = {
    type: ActionTypes.LOAD_COMMENTS,
    payload: offersReviews
  };
  const nextState = {
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    offers: [],
    offersReviews
  };
  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should set currentLocation by given in payload`, () => {
  const location = `New York`;
  const action = {
    type: ActionTypes.CHANGE_LOCATION,
    payload: location
  };
  const nextState = {
    currentLocation: location,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    offers: [],
    offersReviews: []
  };

  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should set currentOfferId by given in payload`, () => {
  const offerId = 2;
  const action = {
    type: ActionTypes.CHANGE_CURRENT_OFFER_ID,
    payload: offerId
  };
  const nextState = {
    currentLocation: ``,
    currentOfferId: offerId,
    offers: [],
    offersReviews: []
  };

  expect(reducer(initState, action)).toEqual(nextState);
});
