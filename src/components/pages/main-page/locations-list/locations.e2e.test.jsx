import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {LocationsList} from './locations-list.jsx';

configure({adapter: new Adapter()});

it(`Should render correct child count`, () => {
  const locations = [`Moscow`, `New York`];
  const tree = shallow(
      <LocationsList
        locations={locations}
        currentLocation="Moscow"
        onClick={jest.fn()} />,
  );
  const listItems = tree.find(`.tabs__list`).children();
  expect(listItems).toHaveLength(locations.length);
});
