import React from 'react';
import PlacesList from '../places-list/places-list.jsx';

const ADDITIONAL_CLASSES = {
  own: `favorites__places`,
  item: {
    own: `favorites__card`,
    imageWrapper: `favorites__image-wrapper`,
    imageWidth: 150,
    imageHeight: 110,
    cardInfo: `favorites__card-info`,
  },
};

const FavoritesPlaces = (props) => (
  <PlacesList {...props} additionalClasses={ADDITIONAL_CLASSES} />
);

export default FavoritesPlaces;
