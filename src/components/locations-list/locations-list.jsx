import React from 'react';
import PropTypes from 'prop-types';
import Location from '../location/location.jsx';

import {connect} from 'react-redux';
import {getLocations, getCurrentLocation} from '../../store/data/selectors.js';
import {ActionCreator} from '../../store/data/data.js';

const LocationsList = ({locations, currentLocation, onClick}) => (
  <section className="locations container">
    <ul className="locations__list tabs__list">
      {locations.map((it, i) => (
        <Location
          key={i}
          location={it}
          current={it === currentLocation}
          onClick={() => onClick(it)}
        />
      ))}
    </ul>
  </section>
);

LocationsList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.string),
  currentLocation: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  locations: getLocations(state),
  currentLocation: getCurrentLocation(state),
});

const mapDispatchToProps = {
  onClick: ActionCreator.changeLocation,
};

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
