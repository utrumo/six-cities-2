import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PlacesFound} from './places-found.jsx';

configure({adapter: new Adapter()});

it(`Should render correct places count and city Name`, () => {
  const count = 3;
  const city = `Moscow`;
  const expectedResult = `${count} places to stay in ${city}`;
  const tree = shallow(<PlacesFound count={count} city={city} />);
  const b = tree.find(`b`);
  expect(b.text()).toEqual(expectedResult);
});
