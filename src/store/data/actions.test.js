import {SortingVariants} from 'shared/const.js';
import * as Type from './types';
import * as Action from './actions';

it(`changeCurrentOfferId: Should return correct action for change Current offer id`, () => {
  const id = 3;
  const action = Action.changeCurrentOfferId(id);
  const expectedAction = {type: Type.CHANGE_CURRENT_OFFER_ID, payload: id};

  expect(action).toEqual(expectedAction);
});

it(`addOffers: Should return correct action for  add offers`, () => {
  const incomingOffers = [{
    "id": 6,
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13,
      },
    },
    "preview_image": `img/apartment-01.jpg`,
    "images": [`img/apartment-01.jpg`],
    "title": `House in countryside`,
    "is_favorite": false,
    "is_premium": false,
    "rating": 2.8,
    "type": `room`,
    "bedrooms": 1,
    "max_adults": 1,
    "price": 143,
    "goods": [`Laptop friendly workspace`],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "is_pro": true,
      "avatar_url": `img/avatar-angelina.jpg`,
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
    "location": {
      "latitude": 50.828556999999996,
      "longitude": 4.362697,
      "zoom": 16,
    },
  }];
  const convertedIncomingOffers = [{
    id: 6,
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
  }];
  const action = Action.addOffers(incomingOffers);
  const expectedAction = {type: Type.ADD_OFFERS, payload: convertedIncomingOffers};

  expect(action).toEqual(expectedAction);
});

it(`addComments: Should return correct action for add comments`, () => {
  const incomingComments = [{
    "id": 4,
    "comments": [{
      "id": 1,
      "user": {
        "id": 17,
        "is_pro": false,
        "name": `Emely`,
        "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/8.jpg`,
      },
      "rating": 5,
      "comment": `What an amazing view!`,
      "date": `2019-11-06T08:29:32.094Z`,
    }],
  }];
  const convertedIncomingComments = [{
    id: 4,
    comments: [{
      id: 1,
      user: {
        id: 17,
        isPro: false,
        name: `Emely`,
        avatarUrl: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/8.jpg`,
      },
      rating: 5,
      comment: `What an amazing view!`,
      date: `2019-11-06T08:29:32.094Z`,
    }],
  }];
  const action = Action.addComments(incomingComments);
  const expectedAction = {type: Type.ADD_COMMENTS, payload: convertedIncomingComments};

  expect(action).toEqual(expectedAction);
});

it(`replaceOffer: Should return correct action for replace offer`, () => {
  const offer = {
    "id": 6,
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13,
      },
    },
    "preview_image": `img/apartment-01.jpg`,
    "images": [`img/apartment-01.jpg`],
    "title": `House in countryside`,
    "is_favorite": false,
    "is_premium": false,
    "rating": 2.8,
    "type": `room`,
    "bedrooms": 1,
    "maxAdults": 1,
    "price": 143,
    "goods": [`Laptop friendly workspace`],
    "host": {
      'id': 25,
      'name': `Angelina`,
      "isPro": true,
      "avatar_url": `img/avatar-angelina.jpg`,
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
    'location': {
      "latitude": 50.828556999999996,
      "longitude": 4.362697,
      'zoom': 16,
    },
  };
  const camelCasedOffer = {
    id: 6,
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
  expect(Action.replaceOffer(offer))
    .toEqual({type: Type.REPLACE_OFFER, payload: camelCasedOffer});
});

it(`changeLocation: Should return correct action for change location`, () => {
  const city = `New York`;
  const action = Action.changeLocation(city);
  const expectedAction = {type: Type.CHANGE_LOCATION, payload: city};

  expect(action).toEqual(expectedAction);
});

it(`changeSortOrder: Should return correct action for change sort Order`, () => {
  const action = Action.changeSortOrder(SortingVariants.TOP_RATED);
  const expectedAction = {type: Type.CHANGE_SORT_ORDER, payload: SortingVariants.TOP_RATED};

  expect(action).toEqual(expectedAction);
});
