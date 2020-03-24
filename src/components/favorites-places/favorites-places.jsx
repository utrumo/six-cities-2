import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';

const ADDITIONAL_CLASSES = {
  own: `favorites__places`,
  item: {
    own: `favorites__card`,
    imageWrapper: `favorites__image-wrapper`,
    imageWidth: 150,
    imageHeight: 110,
    cardInfo: `favorites__card-info`
  }
};

const FavoritesPlaces = ({offers}) => (
  <PlacesList offers={offers} additionalClasses={ADDITIONAL_CLASSES} />
);

FavoritesPlaces.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  })).isRequired
};

export default FavoritesPlaces;
