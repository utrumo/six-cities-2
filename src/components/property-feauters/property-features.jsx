import React from 'react';
import PropTypes from 'prop-types';

const PropertyFeatures = (props) => {
  const {bedrooms, maxAdults} = props;
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
                Entire place
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedrooms} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
      </li>
    </ul>
  );
};

PropertyFeatures.propTypes = {
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired
};

export default PropertyFeatures;
