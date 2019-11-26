import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import makeCamelCaseObject from './utils/camel-case-object';
import mockOffers from './mocks/offers.js';
import mockOffersReviews from './mocks/reviews.js';

const camelCaseOffers = makeCamelCaseObject(mockOffers);
const camelCaseOffersReviews = makeCamelCaseObject(mockOffersReviews);

const init = (cityOffers, offersReviews) => {
  ReactDom.render(
      <App
        offers={cityOffers}
        offersReviews={offersReviews}
      />,
      document.getElementById(`root`)
  );
};

init(camelCaseOffers, camelCaseOffersReviews);
