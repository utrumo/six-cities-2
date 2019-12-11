import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const PlacesFound = ({count, city}) => (
  <b className="places__found">{count} places to stay in {city}</b>
);

PlacesFound.propTypes = {
  count: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  count: Selectors.getOffersCount(state),
  city: Selectors.getCurrentLocation(state)
});

export {PlacesFound};
export default connect(mapStateToProps)(PlacesFound);
