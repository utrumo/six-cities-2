import React from 'react';
import PropTypes from 'prop-types';
import {
  getNormalizedRating,
  getRatingInPercent
} from '../../utils/rating-to-percent';

const PropertyRating = (props) => {
  const {rating} = props;
  return (
    <div className="property__rating rating">
      <div className="property__stars rating__stars">
        <span
          className="rating__gotten-stars"
          style={{width: `${getRatingInPercent(rating)}%`}}
        />
        <span className="visually-hidden">Rating</span>
      </div>
      <span className="property__rating-value rating__value">
        {getNormalizedRating(rating)}
      </span>
    </div>
  );
};

PropertyRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default PropertyRating;
