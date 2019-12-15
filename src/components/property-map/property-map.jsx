import React from 'react';
import PropTypes from 'prop-types';
import Map from '../map/map.jsx';

import {connect} from 'react-redux';
import {
  getCurrentOfferId,
  getCurrentOfferCityLocation,
  getPropertyMapMarkers
} from '../../store/data/selectors.js';

const MAP_CONTAINER_STYLE = {paddingLeft: `initial`, paddingRight: `initial`};

const PropertyMap = ({view, markers, activeCardId}) => (
  <div className="container" style={MAP_CONTAINER_STYLE}>
    <section className="property__map map">
      <Map view={view} markers={markers} activeCardId={activeCardId} />
    </section>
  </div>
);

PropertyMap.propTypes = {
  activeCardId: PropTypes.number.isRequired,
  view: PropTypes.exact({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  markers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  }))
};

const mapStateToProps = (state) => ({
  activeCardId: getCurrentOfferId(state),
  view: getCurrentOfferCityLocation(state),
  markers: getPropertyMapMarkers(state)
});

export {PropertyMap};
export default connect(mapStateToProps)(PropertyMap);
