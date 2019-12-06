import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyFeatures from './property-features.jsx';

configure({adapter: new Adapter()});

it(`Must render 4 Badrooms`, () => {
  const bedrooms = 2;
  const text = shallow(<PropertyFeatures maxAdults={4} bedrooms={bedrooms} />)
      .find(`.property__feature--bedrooms`).text();
  expect(text).toEqual(`${bedrooms} Bedrooms`);
});

it(`Must render max 4 adults`, () => {
  const maxAdults = 3;
  const text = shallow(<PropertyFeatures maxAdults={maxAdults} bedrooms={3} />)
    .find(`.property__feature--adults`).text();
  expect(text).toEqual(`Max ${maxAdults} adults`);
});
