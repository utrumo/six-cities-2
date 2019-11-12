import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import offers from './mocks/offers.js';

const renameProperty = (object, oldName, newName) => {
  if (oldName === newName) {
    return;
  }
  object[newName] = object[oldName];
  delete object[oldName];
};


const getNormalizedOffers = (locations) => locations.map((location) => {
  const normalized = Object.assign({}, location);
  renameProperty(normalized, `preview_image`, `previewImage`);
  renameProperty(normalized, `is_premium`, `isPremium`);
  return normalized;
});

const init = (cityLocations) => {
  ReactDom.render(
      <App
        locations={cityLocations}
      />,
      document.getElementById(`root`)
  );
};

const normalizedOffers = getNormalizedOffers(offers);
init(normalizedOffers);
