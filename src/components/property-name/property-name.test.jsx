import React from 'react';
import renderer from 'react-test-renderer';
import {PropertyName} from './property-name.jsx';

it(`PropertyName should renders correct.`, () => {
  const tree = renderer
    .create(
        <PropertyName
          title="Test title"
          type="room"
          id={1}
          isFavorite={true}
          onButtonClick={jest.fn()}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
