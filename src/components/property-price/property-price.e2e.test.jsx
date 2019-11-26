import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyPrice from './property-price.jsx';

configure({adapter: new Adapter()});

it(`Must renders correct price`, () => {
  const price = 200;
  const text = shallow(<PropertyPrice price={price} />)
      .find(`.property__price-value`).text();
  expect(text).toEqual(`€${price}`);
});
