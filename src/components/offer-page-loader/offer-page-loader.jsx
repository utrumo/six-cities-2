import React from 'react';
import PropTypes from 'prop-types';

import ErrorPage from '../error-page/error-page.jsx';
import OfferPage from '../offer-page/offer-page.jsx';

import {connect} from 'react-redux';
import {Operation} from '../../store/data/data.js';
import {checkOfferAvailability} from '../../store/data/selectors.js';

const OfferPageLoader = ({id, onOfferRequest, isOfferAvailable, onOfferAvailable}) => {
  const requestedOfferId = Number(id);

  if (Number.isNaN(requestedOfferId)) {
    return <ErrorPage />;
  }

  onOfferRequest(requestedOfferId);

  if (!isOfferAvailable) {
    return <ErrorPage />;
  }

  onOfferAvailable();
  return <OfferPage />;
};

OfferPageLoader.propTypes = {
  id: PropTypes.string.isRequired,
  isOfferAvailable: PropTypes.bool.isRequired,
  onOfferRequest: PropTypes.func.isRequired,
  onOfferAvailable: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  isOfferAvailable: checkOfferAvailability(state)
});

const mapDispatchToProps = {
  onOfferRequest: Operation.checkCurrentOfferId,
  onOfferAvailable: Operation.checkCurrentLocationOnOfferPage
};

export {OfferPageLoader};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPageLoader);
