import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '@ui/page-header/page-header.jsx';
import FavoritesLocationsItems from '../favorites-locations-items/favorites-locations-items.jsx';
import PageFooter from '../page-footer/page-footer.jsx';

import {connect} from 'react-redux';
import {getLocationsWithFavoriteOffers} from '../../store/data/selectors.js';

const FavoritesPage = ({locationsWithOffers}) => (
  <div className="page">
    <PageHeader />
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
    <PageFooter />
  </div>
);

FavoritesPage.propTypes = {
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

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
