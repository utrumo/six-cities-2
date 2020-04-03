import * as Selectors from './selectors.js';
import NameSpace from '../name-spaces.js';
import {SortingVariants} from '../../shared/const.js';

const NAME_SPACE = NameSpace.DATA;

describe(`checkOfferAvailability`, () => {
  it(`Should return true if offers are exists`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 1,
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
        },
      ],
      offersReviews: [],
    }};

    expect(Selectors.checkOffersAvailability(state)).toBeTruthy();
  });

  it(`Should return false if offers aren't exists`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.POPULAR,
      offers: [],
      offersReviews: [],
    }};

    expect(Selectors.checkOffersAvailability(state)).toBeFalsy();
  });
});

it(`Should return locations`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [
      {
        id: 1,
        comments: {
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
        },
      },
    ],
  }};
  expect(Selectors.getLocations(state)).toEqual([`Amsterdam`, `Brussels`]);
});

it(`Should return current location`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [
      {
        id: 1,
        comments: {
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
        },
      },
    ],
  }};
  expect(Selectors.getCurrentLocation(state)).toEqual(state[NAME_SPACE].currentLocation);
});

it(`Should return current sort Order`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
    ],
    offersReviews: [
    ],
  }};
  expect(Selectors.getSortOrder(state)).toEqual(SortingVariants.POPULAR);
});

describe(`getCurrentOffers`, () => {
  it(`Should return offers in current Location without sorting`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 1,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `img/room.jpg`,
          images: [
            `img/room.jpg`,
          ],
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
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
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
          images: [
            `img/room.jpg`,
          ],
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
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
          id: 3,
          city: {
            name: `Brussels`,
            location: {
              latitude: 50.846557,
              longitude: 4.351697,
              zoom: 13,
            },
          },
          previewImage: `img/apartment-01.jpg`,
          images: [
            `img/apartment-01.jpg`,
          ],
          title: `House in countryside`,
          isFavorite: false,
          isPremium: false,
          rating: 2.8,
          type: `room`,
          bedrooms: 1,
          maxAdults: 1,
          price: 143,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 25,
            name: `Angelina`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`,
          },
          description: `Cozy warm bed.`,
          location: {
            latitude: 50.828556999999996,
            longitude: 4.362697,
            zoom: 16,
          },
        },
      ],
      offersReviews: [],
    }};
    const offersInCurrentLocation = [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
        ],
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
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
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
        images: [
          `img/room.jpg`,
        ],
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
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ];
    expect(Selectors.getCurrentOffers(state)).toEqual(offersInCurrentLocation);
  });

  it(`Should get offers by price from low to higt`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.PRICE_LOW_TO_HIGHT,
      offers: [
        {
          id: 1,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `img/room.jpg`,
          images: [
            `img/room.jpg`,
          ],
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
          price: 120,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 6,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
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
          images: [
            `img/room.jpg`,
          ],
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
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
          id: 3,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `img/apartment-01.jpg`,
          images: [
            `img/apartment-01.jpg`,
          ],
          title: `House in countryside`,
          isFavorite: false,
          isPremium: false,
          rating: 2.8,
          type: `room`,
          bedrooms: 1,
          maxAdults: 1,
          price: 143,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 25,
            name: `Angelina`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`,
          },
          description: `Cozy warm bed.`,
          location: {
            latitude: 52.377540000000005,
            longitude: 4.843976,
            zoom: 16,
          },
        },
      ],
      offersReviews: [],
    }};
    const expectedSortedOffers = [
      {
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
        images: [
          `img/room.jpg`,
        ],
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
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
        ],
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
        price: 120,
        type: `apartment`,
        bedrooms: 3,
        maxAdults: 6,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
        id: 3,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/apartment-01.jpg`,
        images: [
          `img/apartment-01.jpg`,
        ],
        title: `House in countryside`,
        isFavorite: false,
        isPremium: false,
        rating: 2.8,
        type: `room`,
        bedrooms: 1,
        maxAdults: 1,
        price: 143,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          isPro: true,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `Cozy warm bed.`,
        location: {
          latitude: 52.377540000000005,
          longitude: 4.843976,
          zoom: 16,
        },
      },
    ];
    expect(Selectors.getCurrentOffers(state)).toEqual(expectedSortedOffers);
  });

  it(`Should get offers by price from hight to low`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.PRICE_HIGHT_TO_LOW,
      offers: [
        {
          id: 1,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `img/room.jpg`,
          images: [
            `img/room.jpg`,
          ],
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
          price: 120,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 6,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
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
          images: [
            `img/room.jpg`,
          ],
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
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
          id: 3,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `img/apartment-01.jpg`,
          images: [
            `img/apartment-01.jpg`,
          ],
          title: `House in countryside`,
          isFavorite: false,
          isPremium: false,
          rating: 2.8,
          type: `room`,
          bedrooms: 1,
          maxAdults: 1,
          price: 143,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 25,
            name: `Angelina`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`,
          },
          description: `Cozy warm bed.`,
          location: {
            latitude: 52.377540000000005,
            longitude: 4.843976,
            zoom: 16,
          },
        },
      ],
      offersReviews: [],
    }};
    const expectedSortedOffers = [
      {
        id: 3,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/apartment-01.jpg`,
        images: [
          `img/apartment-01.jpg`,
        ],
        title: `House in countryside`,
        isFavorite: false,
        isPremium: false,
        rating: 2.8,
        type: `room`,
        bedrooms: 1,
        maxAdults: 1,
        price: 143,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          isPro: true,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `Cozy warm bed.`,
        location: {
          latitude: 52.377540000000005,
          longitude: 4.843976,
          zoom: 16,
        },
      },

      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
        ],
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
        price: 120,
        type: `apartment`,
        bedrooms: 3,
        maxAdults: 6,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
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
        images: [
          `img/room.jpg`,
        ],
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
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ];
    expect(Selectors.getCurrentOffers(state)).toEqual(expectedSortedOffers);
  });

  it(`Should get offers by rating from top to bottom`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.TOP_RATED,
      offers: [
        {
          id: 1,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `img/room.jpg`,
          images: [
            `img/room.jpg`,
          ],
          title: `Wood and stone place`,
          description: `Relax, rejuvenate and unplug.`,
          location: {
            latitude: 52.367540000000005,
            longitude: 4.883976,
            zoom: 16,
          },
          isPremium: false,
          isFavorite: false,
          rating: 3.4,
          price: 120,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 6,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
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
          images: [
            `img/room.jpg`,
          ],
          title: `Wood and stone place`,
          description: `Relax, rejuvenate and unplug.`,
          location: {
            latitude: 52.367540000000005,
            longitude: 4.883976,
            zoom: 16,
          },
          isPremium: false,
          isFavorite: false,
          rating: 4.8,
          price: 80,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 6,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },

        {
          id: 3,
          city: {
            name: `Amsterdam`,
            location: {
              latitude: 52.37454,
              longitude: 4.897976,
              zoom: 13,
            },
          },
          previewImage: `img/apartment-01.jpg`,
          images: [
            `img/apartment-01.jpg`,
          ],
          title: `House in countryside`,
          isFavorite: false,
          isPremium: false,
          rating: 4.6,
          type: `room`,
          bedrooms: 1,
          maxAdults: 1,
          price: 143,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 25,
            name: `Angelina`,
            isPro: true,
            avatarUrl: `img/avatar-angelina.jpg`,
          },
          description: `Cozy warm bed.`,
          location: {
            latitude: 52.377540000000005,
            longitude: 4.843976,
            zoom: 16,
          },
        },
      ],
      offersReviews: [],
    }};
    const expectedSortedOffers = [
      {
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
        images: [
          `img/room.jpg`,
        ],
        title: `Wood and stone place`,
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 52.367540000000005,
          longitude: 4.883976,
          zoom: 16,
        },
        isPremium: false,
        isFavorite: false,
        rating: 4.8,
        price: 80,
        type: `apartment`,
        bedrooms: 3,
        maxAdults: 6,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
        id: 3,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/apartment-01.jpg`,
        images: [
          `img/apartment-01.jpg`,
        ],
        title: `House in countryside`,
        isFavorite: false,
        isPremium: false,
        rating: 4.6,
        type: `room`,
        bedrooms: 1,
        maxAdults: 1,
        price: 143,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          isPro: true,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `Cozy warm bed.`,
        location: {
          latitude: 52.377540000000005,
          longitude: 4.843976,
          zoom: 16,
        },
      },

      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
        ],
        title: `Wood and stone place`,
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 52.367540000000005,
          longitude: 4.883976,
          zoom: 16,
        },
        isPremium: false,
        isFavorite: false,
        rating: 3.4,
        price: 120,
        type: `apartment`,
        bedrooms: 3,
        maxAdults: 6,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ];
    expect(Selectors.getCurrentOffers(state)).toEqual(expectedSortedOffers);
  });
});

it(`Should return offers count in current location`, () => {
  const mock = {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [],
  };
  const state = {[NAME_SPACE]: mock};
  expect(Selectors.getOffersCountInCurrentLocation(state)).toEqual(2);

  const anotherMock = Object.assign({}, mock, {currentLocation: `Brussels`});
  const nextState = {[NAME_SPACE]: anotherMock};
  expect(Selectors.getOffersCountInCurrentLocation(nextState)).toEqual(1);
});

it(`Should return current offer id`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 2,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [{
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
  }};
  expect(Selectors.getCurrentOfferId(state)).toEqual(2);
});

it(`Should return correct bool value - Is available offer with given id or not?`, () => {
  const mock = {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [{
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
  };
  const state = {[NAME_SPACE]: mock};
  expect(Selectors.checkOfferAvailability(state)).toBeTruthy();

  const anotherMock = Object.assign({}, mock, {currentOfferId: 4});
  const anotherStore = {[NAME_SPACE]: anotherMock};
  expect(Selectors.checkOfferAvailability(anotherStore)).toBeFalsy();
});

it(`Should return current offer city name`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [{
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
  }};
  expect(Selectors.getCurrentOfferCityName(state)).toEqual(state[NAME_SPACE].offers[0].city.name);
});

it(`Should return first offer city location`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [{
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
  }};
  expect(Selectors.getFirstOfferCityLocation(state))
    .toEqual(state[NAME_SPACE].offers[0].city.location);
});

it(`Should return Current ofer city location`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 3,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [{
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
  }};
  expect(Selectors.getCurrentOfferCityLocation(state))
    .toEqual(state[NAME_SPACE].offers[2].city.location);
});

it(`Should return correct count current offer images for gallery`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [{
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
  }};
  const imagesForGallery = [
    `img/room.jpg`,
    `img/apartment-02.jpg`,
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-03.jpg`,
  ];
  expect(Selectors.getCurrentOfferImagesForGallery(state)).toEqual(imagesForGallery);
});

it(`Should return correct bool value for isPremiumFlag for current location`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },
    ],
    offersReviews: [
    ],
  }};

  expect(Selectors.getCurrentOfferIsPremiumFlag(state)).toBeFalsy();
});

it(`Should return current offer title`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },
    ],
    offersReviews: [
    ],
  }};

  expect(Selectors.getCurrentOfferTitle(state)).toEqual(`Wood and stone place`);
});

it(`Should return current offer type`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },
    ],
    offersReviews: [
    ],
  }};
  expect(Selectors.getCurrentOfferType(state)).toEqual(`apartment`);
});

it(`Should return current offer rating in percent`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },
    ],
    offersReviews: [
    ],
  }};
  expect(Selectors.getCurrentOfferRatingInPercent(state)).toEqual(80);
});

it(`Should return current normalized rating`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },
    ],
    offersReviews: [
    ],
  }};
  expect(Selectors.getCurrentOfferNormalizedRating(state)).toEqual(4);
});

it(`Should return current offer bedrooms`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [],
  }};
  expect(Selectors.getCurrentOfferBedrooms(state)).toEqual(7);
});

it(`Should return current offer max adults count`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [],
  }};

  expect(Selectors.getCurrentOfferMaxAdults(state)).toEqual(6);
});

it(`Should return current offer price`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [],
  }};

  expect(Selectors.getCurrentOfferPrice(state)).toEqual(80);
});

it(`Should return current offer goods`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [
    ],
  }};

  expect(Selectors.getCurrentOfferGoods(state)).toEqual([`Laptop friendly workspace`]);
});

it(`Should return current offer description`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [],
  }};
  expect(Selectors.getCurrentOfferDescription(state))
    .toEqual(`Relax, rejuvenate and unplug.`);
});

it(`Should return current offer host name`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [
    ],
  }};

  expect(Selectors.getCurrentOfferHostName(state)).toEqual(`Oleg`);
});

it(`Should return current offer host isPro flag`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [],
  }};

  expect(Selectors.getCurrentOfferHostIsPro(state)).toBeFalsy();
});

it(`Should return current offer host avatar url`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [],
  }};

  expect(Selectors.getCurrentOfferHostAvatarUrl(state)).toEqual(`img/avatar-max.jpg`);
});

it(`Should return comments for offer page`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
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
      },
    ],
    offersReviews: [
      {
        id: 1,
        comments: [
          {
            id: 1,
            user: {
              id: 12,
              isPro: true,
              name: `Isaac`,
              avatarUrl: `img/3.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-14T08:29:32.094Z`,
          },
          {
            id: 2,
            user: {
              id: 13,
              isPro: false,
              name: `Alex`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-15T08:29:32.094Z`,
          },
          {
            id: 3,
            user: {
              id: 13,
              isPro: true,
              name: `Coala`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-16T08:29:32.094Z`,
          },
          {
            id: 4,
            user: {
              id: 13,
              isPro: false,
              name: `Jane`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-17T08:29:32.094Z`,
          },
          {
            id: 5,
            user: {
              id: 13,
              isPro: false,
              name: `Ulia`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-18T08:29:32.094Z`,
          },
          {
            id: 6,
            user: {
              id: 13,
              isPro: false,
              name: `Alex`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-19T08:29:32.094Z`,
          },
          {
            id: 7,
            user: {
              id: 13,
              isPro: false,
              name: `Michail`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-20T08:29:32.094Z`,
          },
          {
            id: 8,
            user: {
              id: 13,
              isPro: false,
              name: `Petr`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-21T08:29:32.094Z`,
          },
          {
            id: 9,
            user: {
              id: 13,
              isPro: false,
              name: `Alex`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-22T08:29:32.094Z`,
          },
          {
            id: 10,
            user: {
              id: 13,
              isPro: false,
              name: `Alex`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-23T08:29:32.094Z`,
          },
          {
            id: 11,
            user: {
              id: 13,
              isPro: false,
              name: `Oksana`,
              avatarUrl: `img/oksana.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-24T08:29:32.094Z`,
          },
        ],
      },
    ],
  }};

  const expectedCommentsForOfferPage = [
    {
      id: 10,
      user: {
        id: 13,
        isPro: false,
        name: `Alex`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-23T08:29:32.094Z`,
    },
    {
      id: 9,
      user: {
        id: 13,
        isPro: false,
        name: `Alex`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-22T08:29:32.094Z`,
    },
    {
      id: 8,
      user: {
        id: 13,
        isPro: false,
        name: `Petr`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-21T08:29:32.094Z`,
    },
    {
      id: 7,
      user: {
        id: 13,
        isPro: false,
        name: `Michail`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-20T08:29:32.094Z`,
    },
    {
      id: 6,
      user: {
        id: 13,
        isPro: false,
        name: `Alex`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-19T08:29:32.094Z`,
    },
    {
      id: 5,
      user: {
        id: 13,
        isPro: false,
        name: `Ulia`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-18T08:29:32.094Z`,
    },
    {
      id: 4,
      user: {
        id: 13,
        isPro: false,
        name: `Jane`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-17T08:29:32.094Z`,
    },
    {
      id: 3,
      user: {
        id: 13,
        isPro: true,
        name: `Coala`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-16T08:29:32.094Z`,
    },
    {
      id: 2,
      user: {
        id: 13,
        isPro: false,
        name: `Alex`,
        avatarUrl: `img/alex.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-15T08:29:32.094Z`,
    },
    {
      id: 1,
      user: {
        id: 12,
        isPro: true,
        name: `Isaac`,
        avatarUrl: `img/3.jpg`,
      },
      rating: 3,
      comment: `The house is very good`,
      date: `2019-10-14T08:29:32.094Z`,
    },
  ];

  expect(Selectors.getCommentsForOfferPage(state)).toEqual(expectedCommentsForOfferPage);
});

it(`Should return comments count for current offer`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
        bedrooms: 7,
        maxAdults: 6,
        goods: [`Laptop friendly workspace`],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },
    ],
    offersReviews: [
      {
        id: 1,
        comments: [
          {
            id: 1,
            user: {
              id: 12,
              isPro: true,
              name: `Isaac`,
              avatarUrl: `img/3.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-14T08:29:32.094Z`,
          },
          {
            id: 2,
            user: {
              id: 13,
              isPro: false,
              name: `Alex`,
              avatarUrl: `img/alex.jpg`,
            },
            rating: 3,
            comment: `The house is very good`,
            date: `2019-10-15T08:29:32.094Z`,
          },
        ],
      },
    ]}};
  expect(Selectors.getCommentsCount(state)).toEqual(2);
});

it(`Shuld return nearest offers`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },

      {
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
        images: [
          `img/apartment-01.jpg`,
        ],
        title: `House in countryside`,
        isFavorite: false,
        isPremium: false,
        rating: 2.8,
        type: `room`,
        bedrooms: 1,
        maxAdults: 1,
        price: 143,
        goods: [
          `Laptop friendly workspace`,
          `Breakfast`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          isPro: true,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [
    ],
  }};

  const expectedOffers = [
    {
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
    },
  ];

  expect(Selectors.getNearestOffers(state)).toEqual(expectedOffers);
});

describe(`checkFavoriteOffersAvailability`, () => {
  it(`Should return false because we don't have favorite offers`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 1,
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
        },
      ],
      offersReviews: [],
    }};
    expect(Selectors.checkFavoriteOffersAvailability(state)).toBeFalsy();
  });

  it(`Should return true because we have favorite offers`, () => {
    const state = {[NAME_SPACE]: {
      currentLocation: `Amsterdam`,
      currentOfferId: 1,
      sortOrder: SortingVariants.POPULAR,
      offers: [
        {
          id: 1,
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
          isFavorite: true,
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
        },
      ],
      offersReviews: [],
    }};
    expect(Selectors.checkFavoriteOffersAvailability(state)).toBeTruthy();
  });
});

it(`Should return locations with favorite offers`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
        ],
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
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
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
        images: [
          `img/room.jpg`,
        ],
        title: `Wood and stone place`,
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 52.367540000000005,
          longitude: 4.883976,
          zoom: 16,
        },
        isPremium: false,
        isFavorite: true,
        rating: 4.2,
        price: 80,
        type: `apartment`,
        bedrooms: 3,
        maxAdults: 6,
        goods: [
          `Laptop friendly workspace`,
        ],
        host: {
          id: 2,
          name: `Oleg`,
          isPro: false,
          avatarUrl: `img/avatar-max.jpg`,
        },
      },

      {
        id: 3,
        city: {
          name: `Brussels`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        previewImage: `img/apartment-01.jpg`,
        images: [
          `img/apartment-01.jpg`,
        ],
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },

      {
        "id": 4,
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13,
          },
        },
        "previewImage": `/img/apartment-02.jpg`,
        "images": [
          `/img/apartment-02.jpg`,
        ],
        "title": `Loft Studio in the Central Area`,
        "isFavorite": false,
        "isPremium": false,
        "rating": 2.4,
        "type": `room`,
        "bedrooms": 1,
        "maxAdults": 2,
        "price": 198,
        "goods": [
          `Towels`,
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "isPro": true,
          "avatarUrl": `img/avatar-angelina.jpg`,
        },
        "description": `This is a place for dreamers to reset, reflect, and create.`,
        "location": {
          "latitude": 50.867557,
          "longitude": 4.371696999999999,
          "zoom": 16,
        },
      },
    ],
    offersReviews: [
    ],
  }};
  const expectedResult = [
    {
      location: `Amsterdam`,
      offers: [
        {
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
          images: [
            `img/room.jpg`,
          ],
          title: `Wood and stone place`,
          description: `Relax, rejuvenate and unplug.`,
          location: {
            latitude: 52.367540000000005,
            longitude: 4.883976,
            zoom: 16,
          },
          isPremium: false,
          isFavorite: true,
          rating: 4.2,
          price: 80,
          type: `apartment`,
          bedrooms: 3,
          maxAdults: 6,
          goods: [
            `Laptop friendly workspace`,
          ],
          host: {
            id: 2,
            name: `Oleg`,
            isPro: false,
            avatarUrl: `img/avatar-max.jpg`,
          },
        },
      ],
    },
    {
      location: `Brussels`,
      offers: [
        {
          id: 3,
          city: {
            name: `Brussels`,
            location: {
              latitude: 50.846557,
              longitude: 4.351697,
              zoom: 13,
            },
          },
          previewImage: `img/apartment-01.jpg`,
          images: [
            `img/apartment-01.jpg`,
          ],
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
          description: `Cozy warm bed.`,
          location: {
            latitude: 50.828556999999996,
            longitude: 4.362697,
            zoom: 16,
          },
        },
      ],
    },
  ];
  expect(Selectors.getLocationsWithFavoriteOffers(state)).toEqual(expectedResult);
});

it(`Should return markers for map on main page`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },

      {
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
        images: [
          `img/apartment-01.jpg`,
        ],
        title: `House in countryside`,
        isFavorite: false,
        isPremium: false,
        rating: 2.8,
        type: `room`,
        bedrooms: 1,
        maxAdults: 1,
        price: 143,
        goods: [
          `Laptop friendly workspace`,
          `Breakfast`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          isPro: true,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [
    ],
  }};
  expect(Selectors.getCityMapMarkers(state)).toEqual([
    {
      id: 1,
      latitude: 52.367540000000005,
      longitude: 4.883976,
    },
    {
      id: 2,
      latitude: 52.367540000000005,
      longitude: 4.883976,
    },
  ]);
});

it(`Should return markers for map on offer page`, () => {
  const state = {[NAME_SPACE]: {
    currentLocation: `Amsterdam`,
    currentOfferId: 1,
    sortOrder: SortingVariants.POPULAR,
    offers: [
      {
        id: 1,
        city: {
          name: `Amsterdam`,
          location: {
            latitude: 52.37454,
            longitude: 4.897976,
            zoom: 13,
          },
        },
        previewImage: `img/room.jpg`,
        images: [
          `img/room.jpg`,
          `img/apartment-02.jpg`,
          `img/room.jpg`,
          `img/apartment-01.jpg`,
          `img/studio-01.jpg`,
          `img/apartment-03.jpg`,
          `img/apartment-01.jpg`,
          `img/apartment-01.jpg`,
        ],
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
      },

      {
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
      },

      {
        id: 3,
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
        description: `Cozy warm bed.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },

      {
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
        images: [
          `img/apartment-01.jpg`,
        ],
        title: `House in countryside`,
        isFavorite: false,
        isPremium: false,
        rating: 2.8,
        type: `room`,
        bedrooms: 1,
        maxAdults: 1,
        price: 143,
        goods: [
          `Laptop friendly workspace`,
          `Breakfast`,
        ],
        host: {
          id: 25,
          name: `Angelina`,
          isPro: true,
          avatarUrl: `img/avatar-angelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug.`,
        location: {
          latitude: 50.828556999999996,
          longitude: 4.362697,
          zoom: 16,
        },
      },
    ],
    offersReviews: [
    ],
  }};
  expect(Selectors.getPropertyMapMarkers(state)).toEqual([
    {
      id: 2,
      latitude: 52.367540000000005,
      longitude: 4.883976,
    },
    {
      id: 1,
      latitude: 52.367540000000005,
      longitude: 4.883976,
    },
  ]);
});
