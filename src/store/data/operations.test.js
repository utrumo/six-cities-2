import MockAdapter from 'axios-mock-adapter';
import createAPI from 'api';
import {SortingVariants, ResponseCode, UrlPath, ApiPath} from 'shared/const';
import NameSpace from 'store/name-spaces';
import * as Type from './types';
import * as Operation from './operations';

const NAME_SPACE = NameSpace.DATA;

describe(`checkCurrentOfferId`, () => {
  it(`Should dispatch changeCurrentOfferId`, () => {
    const dispatch = jest.fn();
    const getState = () => ({[NAME_SPACE]: {
      currentLocation: ``,
      currentOfferId: 1,
      sortOrder: SortingVariants.POPULAR,
      offers: [],
      offersReviews: [],
    }});
    const requestedOfferId = 2;
    const expectedResult = {
      type: Type.CHANGE_CURRENT_OFFER_ID,
      payload: requestedOfferId,
    };

    Operation.checkCurrentOfferId(requestedOfferId)(dispatch, getState);

    expect(dispatch).toHaveBeenNthCalledWith(1, expectedResult);
  });

  it(`Shouldn't dispatch anything`, () => {
    const dispatch = jest.fn();
    const getState = () => ({[NAME_SPACE]: {
      currentLocation: ``,
      currentOfferId: 1,
      sortOrder: SortingVariants.POPULAR,
      offers: [],
      offersReviews: [],
    }});
    const requestedOfferId = 1;

    Operation.checkCurrentOfferId(requestedOfferId)(dispatch, getState);

    expect(dispatch).not.toHaveBeenCalled();
  });
});

it(`loadOffers: Should coreect load offers from remote server`, () => {
  const dispatch = jest.fn();
  const onUnauthorized = jest.fn();
  const api = createAPI(onUnauthorized);
  const apiMock = new MockAdapter(api);
  const offersLoader = Operation.loadOffers();
  const response = [{
    "id": 6,
    "city": {
      "name": `Brussels`,
      "location": {
        "latitude": 50.846557,
        "longitude": 4.351697,
        "zoom": 13,
      },
    },
    "preview_image": `/img/apartment-01.jpg`,
    "images": [`/img/apartment-01.jpg`],
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
      "avatar_url": `img/avatar-max.jpg`,
    },
    "description": `Relax, rejuvenate and unplug.`,
    "location": {
      "latitude": 50.828556999999996,
      "longitude": 4.362697,
      "zoom": 16,
    },
  }];
  const expectedPayload = [{
    id: 6,
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `/img/apartment-01.jpg`,
    images: [`/img/apartment-01.jpg`],
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
      avatarUrl: `img/avatar-max.jpg`,
    },
    description: `Relax, rejuvenate and unplug.`,
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16,
    },
  }];
  apiMock
    .onGet(UrlPath.HOTELS)
    .reply(ResponseCode.OK, response);

  return offersLoader(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: Type.ADD_OFFERS,
        payload: expectedPayload,
      });
    });
});

it(`toggleFavoriteStatus: Should dispatch correct action`, () => {
  const offer = {
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
  const oppositFavoriteStatus = Number(!offer.isFavorite);
  const response = {
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
    "is_favorite": true,
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
      "avatarUrl": `img/avatar-angelina.jpg`,
    },
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
    "location": {
      "latitude": 50.828556999999996,
      "longitude": 4.362697,
      "zoom": 16,
    },
  };
  const camelcasedResponse = {
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
  const expectedAction = {
    type: Type.REPLACE_OFFER,
    payload: camelcasedResponse,
  };
  const onUnauthorized = jest.fn();
  const dispatch = jest.fn();
  const getState = jest.fn();

  const api = createAPI(onUnauthorized);
  const apiMock = new MockAdapter(api);
  const url = `${ApiPath.FAVORITE}/${offer.id}/${oppositFavoriteStatus}`;
  apiMock
    .onPost(url)
    .reply(ResponseCode.OK, response);

  const favoriteStatusToggler = Operation.toggleFavoriteStatus(offer.id, offer.isFavorite);
  return favoriteStatusToggler(dispatch, getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, expectedAction);
    });
});

describe(`checkCurrentLocationOnOfferPage`, () => {
  it(`Should dispatch correct change location action`, () => {
    const dispatch = jest.fn();
    const getState = () => ({[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 6,
      sortOrder: SortingVariants.POPULAR,
      offers: [{
        id: 6,
        city: {
          name: `Brussels`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        previewImage: `/img/apartment-01.jpg`,
        images: [`/img/apartment-01.jpg`],
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
          avatarUrl: `img/avatar-max.jpg`,
        },
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      }],
      offersReviews: [],
    }});
    const expectedResult = {
      type: Type.CHANGE_LOCATION,
      payload: `Brussels`,
    };

    Operation.checkCurrentLocationOnOfferPage()(dispatch, getState);
    expect(dispatch).toHaveBeenNthCalledWith(1, expectedResult);
  });

  it(`Shouldn't dispatch anything`, () => {
    const dispatch = jest.fn();
    const getState = () => ({[NAME_SPACE]: {
      currentLocation: `Brussels`,
      currentOfferId: 6,
      sortOrder: SortingVariants.POPULAR,
      offers: [{
        id: 6,
        city: {
          name: `Brussels`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        previewImage: `/img/apartment-01.jpg`,
        images: [`/img/apartment-01.jpg`],
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
          avatarUrl: `img/avatar-max.jpg`,
        },
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      }],
      offersReviews: [],
    }});

    Operation.checkCurrentLocationOnOfferPage()(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
  });
});

describe(`checkCurrentLocationOnMainPage`, () => {
  it(`Should dispatch correct change location action`, () => {
    const dispatch = jest.fn();
    const getState = () => ({[NAME_SPACE]: {
      currentLocation: ``,
      currentOfferId: 6,
      sortOrder: SortingVariants.POPULAR,
      offers: [{
        id: 6,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        previewImage: `/img/apartment-01.jpg`,
        images: [`/img/apartment-01.jpg`],
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
          avatarUrl: `img/avatar-max.jpg`,
        },
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      }],
      offersReviews: [],
    }});
    const expectedResult = {
      type: Type.CHANGE_LOCATION,
      payload: `Amsterdam`,
    };

    Operation.checkCurrentLocationOnMainPage()(dispatch, getState);
    expect(dispatch).toHaveBeenNthCalledWith(1, expectedResult);
  });

  it(`Shouldn't dispatch anything`, () => {
    const dispatch = jest.fn();
    const getState = () => ({[NAME_SPACE]: {
      currentLocation: `Brussels`,
      currentOfferId: 6,
      sortOrder: SortingVariants.POPULAR,
      offers: [{
        id: 6,
        city: {
          name: `Brussels`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        previewImage: `/img/apartment-01.jpg`,
        images: [`/img/apartment-01.jpg`],
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
          avatarUrl: `img/avatar-max.jpg`,
        },
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      }],
      offersReviews: [],
    }});

    Operation.checkCurrentLocationOnMainPage()(dispatch, getState);
    expect(dispatch).not.toHaveBeenCalled();
  });
});
