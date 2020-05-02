import React from 'react';
import PropTypes from 'prop-types';
import FavoritePlaces from '../favorite-places/favorite-places.jsx';

const FavoritesLocationsItems = ({locationName, offers}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{locationName}</span>
          </a>
        </div>
      </div>
      <FavoritePlaces offers={offers} />
    </li>
  );
};

FavoritesLocationsItems.propTypes = {
  locationName: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  })).isRequired,
};

export default FavoritesLocationsItems;
