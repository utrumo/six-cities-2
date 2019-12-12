import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const PropertyFeatures = ({bedrooms, maxAdults}) => (
  <ul className="property__features">
    <li className="property__feature property__feature--entire">Entire place</li>
    <li className="property__feature property__feature--bedrooms">{bedrooms} Bedrooms</li>
    <li className="property__feature property__feature--adults">Max {maxAdults} adults</li>
  </ul>
);


PropertyFeatures.propTypes = {
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  bedrooms: Selectors.getCurrentOfferBedrooms(state),
  maxAdults: Selectors.getCurrentOfferMaxAdults(state)
});

export {PropertyFeatures};
export default connect(mapStateToProps)(PropertyFeatures);
