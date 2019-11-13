import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import mockOffers from './mocks/offers.js';
import {makeCamelCaseObject} from './utils/camel-case-object';

const camelCaseOffers = makeCamelCaseObject(mockOffers);

const init = (cityOffers) => {
  ReactDom.render(
      <App
        offers={cityOffers}
      />,
      document.getElementById(`root`)
  );
};

init(camelCaseOffers);
