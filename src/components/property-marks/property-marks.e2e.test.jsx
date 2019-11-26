import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PropertyMarks from './property-marks.jsx';

configure({adapter: new Adapter()});

it(`Premium mark are renders if isPremium is true`, () => {
  const isRendered = shallow(<PropertyMarks isPremium={true} />).exists(`.property__mark`);
  expect(isRendered).toBeTruthy();
});

it(`Premium mark doesn't render if isPremium is false`, () => {
  const isRendered = shallow(<PropertyMarks isPremium={false} />).exists(`.property__mark`);
  expect(isRendered).toBeFalsy();
});
