import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyInside from './property-inside.jsx';

configure({adapter: new Adapter()});

it(`Doesn't render inside-list if goods.length = 0`, () => {
  const goods = [];
  const listEl = shallow(<PropertyInside goods={goods} />).find(`.property__inside`);
  expect(listEl.exists()).toBeFalsy();
});

it(`Must render inside-list and 3 internal item if goods.length = 3`, () => {
  const goods = [`first`, `second`, `third`];
  const items = shallow(<PropertyInside goods={goods} />).find(`.property__inside-item`);
  expect(items).toHaveLength(goods.length);
});
