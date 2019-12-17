import React from 'react';
import PropTypes from 'prop-types';

import ErrorPage from '../../components/error-page/error-page.jsx';
import MainPage from '../../components/main-page/main-page.jsx';

import {connect} from 'react-redux';
import {ActionCreator} from '../../store/data/data.js';
import {
  checkOffersAvailability,
  getCurrentLocation,
  getLocations
} from '../../store/data/selectors.js';

const noOffers = {
  status: `No places to stay available`,
  description: `We could not find any property available at the moment`
};

const checkLocation = (currentLocation, locations, onChangeLocation) => {
  if (!currentLocation) {
    const randomIndex = Math.floor(Math.random() * locations.length);
    const location = locations[randomIndex];
    onChangeLocation(location);
  }
};

const MainPageLoader = ({isOffersAvailable, currentLocation, locations, onChangeLocation}) => {
  if (!isOffersAvailable) {
    return <ErrorPage status={noOffers.status} description={noOffers.description} isMain />;
  }

  checkLocation(currentLocation, locations, onChangeLocation);

  return <MainPage />;
};

MainPageLoader.propTypes = {
  isOffersAvailable: PropTypes.bool.isRequired,
  currentLocation: PropTypes.string.isRequired,
  locations: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOffersAvailable: checkOffersAvailability(state),
  currentLocation: getCurrentLocation(state),
  locations: getLocations(state)
});

const mapDispatchToProps = {
  onChangeLocation: ActionCreator.changeLocation
};

export {MainPageLoader};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageLoader);
