import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyRating from './property-rating.jsx';

configure({adapter: new Adapter()});

it(`Must renders correct rating level`, () => {
  const ratingValue = shallow(<PropertyRating rating={4.6} />).find(`.property__rating-value`).text();
  expect(ratingValue).toEqual(`5`);
});

it(`Must renders with correct style width`, () => {
  const styleValue = shallow(<PropertyRating rating={4.6} />).find(`.rating__gotten-stars`)
    .prop(`style`).width;

  expect(styleValue).toEqual(`100%`);
});
