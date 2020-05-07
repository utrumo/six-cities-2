import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DataSelector, DataOperation} from 'store';
import Location from '../location/location.jsx';

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
  locations: DataSelector.getLocations(state),
  currentLocation: DataSelector.getCurrentLocation(state),
});

const mapDispatchToProps = {
  onClick: DataOperation.changeLocation,
};

export {LocationsList};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsList);
