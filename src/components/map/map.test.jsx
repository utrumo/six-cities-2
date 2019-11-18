import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const view = {
  latitude: 52.370216,
  longitude: 4.895168,
  zoom: 12
};

const markers = [
  {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198
  },
  {
    latitude: 52.369553943508,
    longitude: 4.85309666406198
  }
];

it(`Map component renders correctly after restart`, () => {
  const tree = renderer.create(<Map view={view} markers={markers}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
