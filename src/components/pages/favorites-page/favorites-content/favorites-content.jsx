import React from 'react';
import PropTypes from 'prop-types';
import FavoritesLocationsItems from '../favorites-locations-items/favorites-locations-items.jsx';

import {connect} from 'react-redux';
import {getLocationsWithFavoriteOffers} from 'store/data/selectors.js';

const FavoritesContent = ({locationsWithOffers}) => (
  <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {locationsWithOffers.map(({location, offers}) => (
            <FavoritesLocationsItems key={location} locationName={location} offers={offers} />
          ))}
        </ul>
      </section>
    </div>
  </main>
);

FavoritesContent.propTypes = {
  locationsWithOffers: PropTypes.arrayOf(PropTypes.exact({
    location: PropTypes.string.isRequired,
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
  })),
};

const mapStateToProps = (state) => ({
  locationsWithOffers: getLocationsWithFavoriteOffers(state),
});

export {FavoritesContent};
export default connect(mapStateToProps)(FavoritesContent);
