import {reducer} from './reducers';
import * as Type from './types';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from 'shared/const';

let initState;
beforeEach(() => {
  initState = {
    offers: [],
    offersReviews: [],
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    sortOrder: SortingVariants.POPULAR,
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
        zoom: 13,
      },
    },
    previewImage: `img/room.jpg`,
    images: [`img/room.jpg`],
    title: `Wood and stone place`,
    description: `Relax, rejuvenate and unplug.`,
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16,
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
      avatarUrl: `img/avatar-max.jpg`,
    },
  }];
  const action = {
    type: Type.ADD_OFFERS,
    payload: offers,
  };
  const nextState = {
    offers,
    offersReviews: [],
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    sortOrder: SortingVariants.POPULAR,
  };

  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should replace comments by given in payload`, () => {
  const offersReviews = [{
    id: 2,
    comments: [{
      id: 1,
      user: {
        id: 12,
        isPro: true,
        name: `Isaac`,
        avatarUrl: `img/3.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-24T08:29:32.094Z`,
    }],
  }];
  const action = {
    type: Type.ADD_COMMENTS,
    payload: offersReviews,
  };
  const nextState = {
    offers: [],
    offersReviews,
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    sortOrder: SortingVariants.POPULAR,

  };
  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should set currentLocation by given in payload`, () => {
  const location = `New York`;
  const action = {
    type: Type.CHANGE_LOCATION,
    payload: location,
  };
  const nextState = {
    offers: [],
    offersReviews: [],
    currentLocation: location,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    sortOrder: SortingVariants.POPULAR,
  };

  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should set currentOfferId by given in payload`, () => {
  const offerId = 2;
  const action = {
    type: Type.CHANGE_CURRENT_OFFER_ID,
    payload: offerId,
  };
  const nextState = {
    offers: [],
    offersReviews: [],
    currentLocation: ``,
    currentOfferId: offerId,
    sortOrder: SortingVariants.POPULAR,
  };

  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should set sortOrder by given in payload`, () => {
  const action = {
    type: Type.CHANGE_SORT_ORDER,
    payload: SortingVariants.TOP_RATED,
  };
  const nextState = {
    offers: [],
    offersReviews: [],
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    sortOrder: SortingVariants.TOP_RATED,
  };

  expect(reducer(initState, action)).toEqual(nextState);
});

it(`Reducer should replace offer in offers`, () => {
  const firstOffer = {
    id: 1,
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `img/apartment-01.jpg`,
    images: [`img/apartment-01.jpg`],
    title: `House in countryside`,
    isFavorite: false,
    isPremium: false,
    rating: 2.8,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 143,
    goods: [`Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16,
    },
  };
  const secondOffer = {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `img/apartment-02.jpg`,
    images: [`img/apartment-02.jpg`],
    title: `House in countryside`,
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 143,
    goods: [`Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16,
    },
  };
  const newVersionOfSecondOffer = {
    id: 2,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `img/apartment-05.jpg`,
    images: [`img/apartment-01.jpg`],
    title: `Big House`,
    isFavorite: false,
    isPremium: true,
    rating: 2.8,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 143,
    goods: [`Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Jack`,
      isPro: true,
      avatarUrl: `img/avatar-jack.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16,
    },
  };
  const state = {
    offers: [firstOffer, secondOffer],
    offersReviews: [],
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    sortOrder: SortingVariants.TOP_RATED,
  };
  const resultState = {
    offers: [firstOffer, newVersionOfSecondOffer],
    offersReviews: [],
    currentLocation: ``,
    currentOfferId: DEFAULT_NUMBER_VALUE,
    sortOrder: SortingVariants.TOP_RATED,
  };
  const action = {
    type: Type.REPLACE_OFFER,
    payload: newVersionOfSecondOffer,
  };

  expect(reducer(state, action)).toEqual(resultState);
});
