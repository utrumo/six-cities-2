import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyHost} from './property-host.jsx';

it(`PropertyPrice should renders correctly`, () => {
  const tree = renderer
    .create(
        <PropertyHost name="Alex" isPro={true} url="pictures/img.jpg" description="Welcome!" />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
