import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {
  getFirstOfferCityLocation,
  getCityMapMarkers,
  getCurrentOfferId
} from '../../store/data/selectors.js';

import Map from '../map/map.jsx';

const CitiyMap = ({view, markers, activeCardId}) => (
  <section className="cities__map map">
    <Map
      view={view}
      markers={markers}
      activeCardId={activeCardId}
    />
  </section>
);

CitiyMap.propTypes = {
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
  view: getFirstOfferCityLocation(state),
  markers: getCityMapMarkers(state),
  activeCardId: getCurrentOfferId(state)
});

export {CitiyMap};
export default connect(mapStateToProps)(CitiyMap);
