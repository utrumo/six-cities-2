import React from 'react';
import PropTypes from 'prop-types';

const PropertyPrice = (props) => {
  const {price} = props;
  return (
    <div className="property__price">
      <b className="property__price-value">&euro;{price}</b>
      <span className="property__price-text">&nbsp;night</span>
    </div>
  );
};

PropertyPrice.propTypes = {
  price: PropTypes.number.isRequired
};

export default PropertyPrice;
