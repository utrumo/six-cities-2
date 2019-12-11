import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

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
  view: Selectors.getFirstOfferCityLocation(state),
  markers: Selectors.getCityMapMarkers(state),
  activeCardId: Selectors.getCurrentOfferId(state)
});

export {CitiyMap};
export default connect(mapStateToProps)(CitiyMap);
