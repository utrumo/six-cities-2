import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app/app.jsx';
import mockLocations from './mocks/locations.json';

const renameProperty = (object, oldName, newName) => {
  if (oldName === newName) {
    return;
  }
  object[newName] = object[oldName];
  delete object[oldName];
};


const getNormalizedLocations = (locations) => locations.map((location) => {
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

const normalizedLocations = getNormalizedLocations(mockLocations);
init(normalizedLocations);
