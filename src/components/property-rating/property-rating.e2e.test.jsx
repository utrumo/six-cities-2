import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PropertyRating} from './property-rating.jsx';

configure({adapter: new Adapter()});

it(`Must renders correct rating level`, () => {
  const rating = 5;
  const expectValue = `5`;
  const ratingValue = shallow(<PropertyRating
    ratingInPercent={60}
    rating={rating}
  />)
    .find(`.property__rating-value`)
    .text();
  expect(ratingValue).toEqual(expectValue);
});

it(`Must renders with correct style width`, () => {
  const ratingInPercent = 80;
  const expectedResult = `${ratingInPercent}%`;

  const styleValue = shallow(<PropertyRating
    ratingInPercent={ratingInPercent}
    rating={4.6}
  />)
    .find(`.rating__gotten-stars`)
    .prop(`style`).width;

  expect(styleValue).toEqual(expectedResult);
});
