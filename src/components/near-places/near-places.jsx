import React from 'react';
import PropTypes from 'prop-types';
import PlacesList from '../places-list/places-list.jsx';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const ADDITIONAL_CLASSES = {
  own: `near-places__list`,
  item: {
    own: `near-places__card`,
    imageWrapper: `near-places__image-wrapper`
  }
};

const NearPlaces = ({nearestOffers}) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <PlacesList offers={nearestOffers} additionalClasses={ADDITIONAL_CLASSES} />
  </section>
);

NearPlaces.propTypes = {
  nearestOffers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  })).isRequired
};

const mapStateToProps = (state) => ({
  nearestOffers: Selectors.getNearestOffers(state)
});

export {NearPlaces};
export default connect(mapStateToProps)(NearPlaces);

