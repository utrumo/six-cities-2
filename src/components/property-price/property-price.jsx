import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getCurrentOfferPrice} from '../../store/data/selectors.js';

const PropertyPrice = ({price}) => (
  <div className="property__price">
    <b className="property__price-value">&euro;{price}</b>
    <span className="property__price-text">&nbsp;night</span>
  </div>
);

PropertyPrice.propTypes = {
  price: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  price: getCurrentOfferPrice(state),
});

export {PropertyPrice};
export default connect(mapStateToProps)(PropertyPrice);
