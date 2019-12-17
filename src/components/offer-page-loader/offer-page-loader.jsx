import React from 'react';
import PropTypes from 'prop-types';
import OfferPage from '../offer-page/offer-page.jsx';
import ErrorPage from '../error-page/error-page.jsx';

import {connect} from 'react-redux';
import {
  getCurrentOfferId,
  checkOfferAvailability,
  getCurrentLocation,
  getCurrentOfferCityName
} from '../../store/data/selectors.js';
import {ActionCreator} from '../../store/data/data.js';

const checkOfferId = (currentId, offerId, changeOfferId) => {
  if (currentId !== offerId) {
    changeOfferId(offerId);
  }
};
const checkLocation = (currentLocation, offerLocation, changeLocation) => {
  if (currentLocation !== offerLocation) {
    changeLocation(offerLocation);
  }
};

const OfferPageLoader = ({
  id,
  currentOfferId,
  onChangeOfferId,
  isOfferAvailable,
  currentLocation,
  offerLocation,
  onChangeLocation
}) => {
  const offerId = Number(id);
  if (Number.isNaN(offerId)) {
    return <ErrorPage />;
  }

  checkOfferId(currentOfferId, offerId, onChangeOfferId);

  if (!isOfferAvailable) {
    return <ErrorPage />;
  }

  checkLocation(currentLocation, offerLocation, onChangeLocation);

  return <OfferPage />;
};


OfferPageLoader.propTypes = {
  id: PropTypes.string.isRequired,
  currentOfferId: PropTypes.number.isRequired,
  onChangeOfferId: PropTypes.func.isRequired,
  isOfferAvailable: PropTypes.bool.isRequired,
  currentLocation: PropTypes.string.isRequired,
  offerLocation: PropTypes.string,
  onChangeLocation: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currentOfferId: getCurrentOfferId(state),
  isOfferAvailable: checkOfferAvailability(state),
  currentLocation: getCurrentLocation(state),
  offerLocation: getCurrentOfferCityName(state)
});

const mapDispatchToProps = {
  onChangeOfferId: ActionCreator.changeCurrentOfferId,
  onChangeLocation: ActionCreator.changeLocation
};

export {OfferPageLoader};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPageLoader);
