import React from 'react';
import PropTypes from 'prop-types';

import ErrorPage from '../../components/error-page/error-page.jsx';
import MainPage from '../../components/main-page/main-page.jsx';

import {connect} from 'react-redux';
import {checkOffersAvailability, getCurrentLocation} from '../../store/data/selectors.js';
import {Operation} from '../../store/data/data.js';

const noOffers = {
  status: `No places to stay available`,
  description: `We could not find any property available at the moment`
};

const MainPageLoader = ({isOffersAvailable, currentLocation, onOffersAvailable}) => {

  if (isOffersAvailable) {
    onOffersAvailable();
  }

  if (!currentLocation) {
    return <ErrorPage status={noOffers.status} description={noOffers.description} />;
  }

  return <MainPage />;
};

MainPageLoader.propTypes = {
  isOffersAvailable: PropTypes.bool.isRequired,
  onOffersAvailable: PropTypes.func.isRequired,
  currentLocation: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  isOffersAvailable: checkOffersAvailability(state),
  currentLocation: getCurrentLocation(state)
});

const mapDispatchToProps = {
  onOffersAvailable: Operation.checkCurrentLocationOnMainPage
};

export {MainPageLoader};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageLoader);
