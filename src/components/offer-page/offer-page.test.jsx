import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import OfferPage from './offer-page.jsx';

const mockOffer = {
  id: 1,
  images: [
    `img/apartment-02.jpg`,
    `img/room.jpg`,
    `img/apartment-01.jpg`,
    `img/studio-01.jpg`,
    `img/apartment-03.jpg`,
    `img/apartment-01.jpg`
  ],
  title: `Beautiful & luxurious apartment at great location`,
  description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
  isPremium: true,
  rating: 4.6,
  price: 120,
  type: `apartment`,
  bedrooms: 3,
  maxAdults: 4,
  goods: [
    `Washer`,
    `Breakfast`,
    `Air conditioning`,
    `Laptop friendly workspace`,
    `Towels`,
    `Baby seat`
  ],
  host: {
    name: `Max`,
    isPro: false,
    avatarUrl: `img/avatar-max.jpg`
  }
};

it(`shold correct renderer after relaunch`, () => {
  const offerPage = renderer
    .create(<Router>
      <OfferPage {...mockOffer} />
    </Router>)
    .toJSON();
  expect(offerPage).toMatchSnapshot();
});
