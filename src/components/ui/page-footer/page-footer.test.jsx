import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter as Router} from 'react-router-dom';
import PageFooter from './page-footer.jsx';

it(`PageFooter component should renders correctly`, () => {
  const pageFooter = renderer.create(
      <Router>
        <PageFooter />
      </Router>,
  ).toJSON();
  expect(pageFooter).toMatchSnapshot();
});
