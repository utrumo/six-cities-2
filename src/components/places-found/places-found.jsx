import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const PlacesFound = ({city, count}) => (
  <b className="places__found">{count} places to stay in {city}</b>
);

PlacesFound.propTypes = {
  city: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  city: Selectors.getCurrentLocation(state),
  count: Selectors.getOffersCountInCurrentLocation(state)
});

export {PlacesFound};
export default connect(mapStateToProps)(PlacesFound);
