import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyMap} from './property-map.jsx';

it(`PropertyMap renders correctly`, () => {
  const view = {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  };
  const markers = [
    {
      id: 1,
      latitude: 52.35754,
      longitude: 4.9179759999999995
    },
    {
      id: 2,
      latitude: 52.35754,
      longitude: 4.9179759999999995
    }
  ];
  const tree = renderer
    .create(
        <PropertyMap
          activeCardId={1}
          view={view}
          markers={markers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
