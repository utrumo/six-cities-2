import React from 'react';
import renderer from 'react-test-renderer';
import CustomSelect from './custom-select.jsx';

it(`Should renders correctly`, () => {
  const tree = renderer
    .create(<CustomSelect
      label="testLable"
      options={[`first`, `second`]}
      onChange={jest.fn()}
      value="second"
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
