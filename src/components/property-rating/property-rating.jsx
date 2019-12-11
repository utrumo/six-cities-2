import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const PropertyRating = ({ratingInPercent, rating}) => (
  <div className="property__rating rating">
    <div className="property__stars rating__stars">
      <span
        className="rating__gotten-stars"
        style={{width: `${ratingInPercent}%`}}
      />
      <span className="visually-hidden">Rating</span>
    </div>
    <span className="property__rating-value rating__value">{rating}</span>
  </div>
);

PropertyRating.propTypes = {
  ratingInPercent: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  ratingInPercent: Selectors.getCurrentOfferRatingInPercent(state),
  rating: Selectors.getCurrentOfferNormalizedRating(state)
});

export {PropertyRating};
export default connect(mapStateToProps)(PropertyRating);
