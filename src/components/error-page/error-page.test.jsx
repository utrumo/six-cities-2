import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import ErrorPage from './error-page.jsx';

it(`Should renders correctly`, () => {
  const tree = renderer.create(<Router><ErrorPage /></Router>).toJSON();
  expect.toMatchSnapshot(tree);
});
