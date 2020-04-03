import React from 'react';
import PropTypes from 'prop-types';
import FavoritesPageEmpty from '../favorites-page-empty/favorites-page-empty.jsx';
import FavoritesPage from '../favorites-page/favorites-page.jsx';
import {connect} from 'react-redux';
import {checkFavoriteOffersAvailability} from '../../store/data/selectors.js';

const FavoritesPageLoader = ({isFavoriteOffersAvailable}) => {
  return isFavoriteOffersAvailable ? <FavoritesPage /> : <FavoritesPageEmpty />;
};

FavoritesPageLoader.propTypes = {
  isFavoriteOffersAvailable: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFavoriteOffersAvailable: checkFavoriteOffersAvailability(state),
});

export {FavoritesPageLoader};
export default connect(mapStateToProps)(FavoritesPageLoader);
