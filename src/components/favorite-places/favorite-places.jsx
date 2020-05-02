import React from 'react';
import PlacesList from '@ui/places-list/places-list.jsx';

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

const FavoritePlaces = (props) => (
  <PlacesList {...props} additionalClasses={ADDITIONAL_CLASSES} />
);

export default FavoritePlaces;
