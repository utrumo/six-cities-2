import {getNearestOffers, MAX_NEAREST_OFFERS} from './nearest-offers.js';

const mockOffers = [
  {
    id: 1,
    city: {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/9.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`],
    title: `The Joshua Tree House`,
    isFavorite: false,
    isPremium: false,
    rating: 2.7,
    type: `house`,
    bedrooms: 4,
    maxAdults: 9,
    price: 187,
    goods: [`Dishwasher`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `I am happy to welcome you to my apartment in the city center!`,
    location: {
      latitude: 53.565341,
      longitude: 9.980654000000001,
      zoom: 16
    }
  },
  {
    id: 2,
    city: {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
    title: `Perfectly located Castro`,
    isFavorite: false,
    isPremium: false,
    rating: 2.2,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 213,
    goods: [`Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `This is a place for dreamers to reset, reflect, and create.`,
    location: {
      latitude: 53.558341000000006,
      longitude: 9.999654000000001,
      zoom: 16
    }
  },
  {
    id: 3,
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`],
    title: `Amazing and Extremely Central Flat`,
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    type: `house`,
    bedrooms: 3,
    maxAdults: 8,
    price: 141,
    goods: [`Baby seat`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Discover daily local life in city center.`,
    location: {
      latitude: 51.243402,
      longitude: 6.791314,
      zoom: 16
    }
  },
  {
    id: 4,
    city: {
      name: `Paris`,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/17.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/12.jpg`],
    title: `The Joshua Tree House`,
    isFavorite: false,
    isPremium: false,
    rating: 3.2,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 228,
    goods: [`Breakfast`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Three words: location, cosy and chic!`,
    location: {
      latitude: 48.861610000000006,
      longitude: 2.340499,
      zoom: 16
    }
  },
  {
    id: 5,
    city: {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`],
    title: `Waterfront with extraordinary view`,
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 102,
    goods: [`Breakfast`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    }
  }
];
const fromOffer = mockOffers[0];
const correctResult = [
  {
    id: 2,
    city: {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/2.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/13.jpg`],
    title: `Perfectly located Castro`,
    isFavorite: false,
    isPremium: false,
    rating: 2.2,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 213,
    goods: [`Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `This is a place for dreamers to reset, reflect, and create.`,
    location: {
      latitude: 53.558341000000006,
      longitude: 9.999654000000001,
      zoom: 16
    }
  },
  {
    id: 3,
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/15.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`],
    title: `Amazing and Extremely Central Flat`,
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    type: `house`,
    bedrooms: 3,
    maxAdults: 8,
    price: 141,
    goods: [`Baby seat`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Discover daily local life in city center.`,
    location: {
      latitude: 51.243402,
      longitude: 6.791314,
      zoom: 16
    }
  },
  {
    id: 5,
    city: {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    previewImage: `https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/18.jpg`,
    images: [`https://htmlacademy-react-2.appspot.com/six-cities/static/hotel/4.jpg`],
    title: `Waterfront with extraordinary view`,
    isFavorite: false,
    isPremium: false,
    rating: 2.9,
    type: `room`,
    bedrooms: 1,
    maxAdults: 2,
    price: 102,
    goods: [`Breakfast`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
    location: {
      latitude: 53.528341000000005,
      longitude: 10.018654000000002,
      zoom: 16
    }
  }
];

it(`Must return ${MAX_NEAREST_OFFERS} nearest offers`, () => {
  expect(getNearestOffers(fromOffer, mockOffers)).toEqual(correctResult);
});
