import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';

import ErrorPage from '../../components/error-page/error-page.jsx';
import MainPage from '../../components/main-page/main-page.jsx';

import {connect} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors.js';
import {checkOffersAvailability, getCurrentLocation} from '../../store/data/selectors.js';
import {Operation} from '../../store/data/data.js';

const noOffers = {
  status: `No places to stay available`,
  description: `We could not find any property available at the moment`
};

const MainPageLoader = ({isAuthorized, isOffersAvailable, currentLocation, onOffersAvailable}) => {
  if (isAuthorized) {
    return <Redirect to="/login" />;
  }

  if (isOffersAvailable) {
    onOffersAvailable();
  }

  if (!currentLocation) {
    return <ErrorPage status={noOffers.status} description={noOffers.description} isMain />;
  }

  return <MainPage />;
};

MainPageLoader.propTypes = {
  isOffersAvailable: PropTypes.bool.isRequired,
  onOffersAvailable: PropTypes.func.isRequired,
  currentLocation: PropTypes.string.isRequired,
  isAuthorized: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state),
  isOffersAvailable: checkOffersAvailability(state),
  currentLocation: getCurrentLocation(state)
});

const mapDispatchToProps = {
  onOffersAvailable: Operation.checkCurrentLocationOnMainPage
};

export {MainPageLoader};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageLoader);
