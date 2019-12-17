import {ActionType, ActionCreator, Operation, reducer} from './data.js';
import {DEFAULT_NUMBER_VALUE, SortingVariants} from '../../shared/const.js';
import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api.js';

describe(`actionCreator`, () => {
  it(`Should return correct action for  add offers`, () => {
    const incomingOffers = [{
      "id": 6,
      "city": {
        "name": `Brussels`,
        "location": {
          "latitude": 50.846557,
          "longitude": 4.351697,
          "zoom": 13
        }
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
        "avatar_url": `img/avatar-angelina.jpg`
      },
      "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
      "location": {
        "latitude": 50.828556999999996,
        "longitude": 4.362697,
        "zoom": 16
      }
    }];
    const convertedIncomingOffers = [{
      id: 6,
      city: {
        name: `Brussels`,
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
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
        avatarUrl: `img/avatar-angelina.jpg`
      },
      description: `Relax, rejuvenate and unplug in this ultimate rustic getaway.`,
      location: {
        latitude: 50.828556999999996,
        longitude: 4.362697,
        zoom: 16
      }
    }];
    const action = ActionCreator.addOffers(incomingOffers);
    const expectedAction = {type: ActionType.ADD_OFFERS, payload: convertedIncomingOffers};

    expect(action).toEqual(expectedAction);
  });

  it(`Should return correct action for add comments`, () => {
    const incomingComments = [{
      "id": 4,
      "comments": [{
        "id": 1,
        "user": {
          "id": 17,
          "is_pro": false,
          "name": `Emely`,
          "avatar_url": `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/8.jpg`
        },
        "rating": 5,
        "comment": `What an amazing view!`,
        "date": `2019-11-06T08:29:32.094Z`
      }]
    }];
    const convertedIncomingComments = [{
      id: 4,
      comments: [{
        id: 1,
        user: {
          id: 17,
          isPro: false,
          name: `Emely`,
          avatarUrl: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/8.jpg`
        },
        rating: 5,
        comment: `What an amazing view!`,
        date: `2019-11-06T08:29:32.094Z`
      }]
    }];
    const action = ActionCreator.addComments(incomingComments);
    const expectedAction = {type: ActionType.ADD_COMMENTS, payload: convertedIncomingComments};

    expect(action).toEqual(expectedAction);
  });

  it(`Should return correct action for change location`, () => {
    const city = `New York`;
    const action = ActionCreator.changeLocation(city);
    const expectedAction = {type: ActionType.CHANGE_LOCATION, payload: city};

    expect(action).toEqual(expectedAction);
  });

  it(`Should return correct action for change Current offer id`, () => {
    const id = 3;
    const action = ActionCreator.changeCurrentOfferId(id);
    const expectedAction = {type: ActionType.CHANGE_CURRENT_OFFER_ID, payload: id};

    expect(action).toEqual(expectedAction);
  });

  it(`Should return correct action for change sort Order`, () => {
    const action = ActionCreator.changeSortOrder(SortingVariants.TOP_RATED);
    const expectedAction = {type: ActionType.CHANGE_SORT_ORDER, payload: SortingVariants.TOP_RATED};

    expect(action).toEqual(expectedAction);
  });
});

describe(`Operation`, () => {
  it(`Should coreect load offers from remote server`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const offersLoader = Operation.loadOffers();
    const response = [{
      "id": 6,
      "city": {
        "name": `Brussels`,
        "location": {
          "latitude": 50.846557,
          "longitude": 4.351697,
          "zoom": 13
        }
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
        "avatar_url": `img/avatar-max.jpg`
      },
      "description": `Relax, rejuvenate and unplug.`,
      "location": {
        "latitude": 50.828556999999996,
        "longitude": 4.362697,
        "zoom": 16
      }
    }];
    const expectedPayload = [{
      id: 6,
      city: {
        name: `Brussels`,
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13
        }
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
        avatarUrl: `img/avatar-max.jpg`
      },
      description: `Relax, rejuvenate and unplug.`,
      location: {
        latitude: 50.828556999999996,
        longitude: 4.362697,
        zoom: 16
      }
    }];
    apiMock
      .onGet(`/hotels`)
      .reply(200, response);

    return offersLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.ADD_OFFERS,
          payload: expectedPayload
        });
      });
  });
});

describe(`reducer`, () => {
  let initState;
  beforeEach(() => {
    initState = {
      offers: [],
      offersReviews: [],
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR
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
      type: ActionType.ADD_OFFERS,
      payload: offers
    };
    const nextState = {
      offers,
      offersReviews: [],
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR
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
      type: ActionType.ADD_COMMENTS,
      payload: offersReviews
    };
    const nextState = {
      offers: [],
      offersReviews,
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR

    };
    expect(reducer(initState, action)).toEqual(nextState);
  });

  it(`Reducer should set currentLocation by given in payload`, () => {
    const location = `New York`;
    const action = {
      type: ActionType.CHANGE_LOCATION,
      payload: location
    };
    const nextState = {
      offers: [],
      offersReviews: [],
      currentLocation: location,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.POPULAR
    };

    expect(reducer(initState, action)).toEqual(nextState);
  });

  it(`Reducer should set currentOfferId by given in payload`, () => {
    const offerId = 2;
    const action = {
      type: ActionType.CHANGE_CURRENT_OFFER_ID,
      payload: offerId
    };
    const nextState = {
      offers: [],
      offersReviews: [],
      currentLocation: ``,
      currentOfferId: offerId,
      sortOrder: SortingVariants.POPULAR
    };

    expect(reducer(initState, action)).toEqual(nextState);
  });

  it(`Reducer should set sortOrder by given in payload`, () => {
    const action = {
      type: ActionType.CHANGE_SORT_ORDER,
      payload: SortingVariants.TOP_RATED
    };
    const nextState = {
      offers: [],
      offersReviews: [],
      currentLocation: ``,
      currentOfferId: DEFAULT_NUMBER_VALUE,
      sortOrder: SortingVariants.TOP_RATED
    };

    expect(reducer(initState, action)).toEqual(nextState);
  });
});

