import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DataOperation, DataSelector} from 'store';
import PageTemplate from '@ui/page-template/page-template.jsx';
import PageHeader from '@ui/page-header/page-header.jsx';
import ErrorPage from '../error-page/error-page.jsx';
import OfferContent from './offer-content/offer-content.jsx';

const OfferPage = (props) => {
  const {match: {params: {id}}, onOfferRequest, isOfferAvailable, onOfferAvailable} = props;
  const requestedOfferId = Number(id);

  if (Number.isNaN(requestedOfferId)) {
    return <ErrorPage />;
  }

  onOfferRequest(requestedOfferId);

  if (!isOfferAvailable) {
    return <ErrorPage />;
  }

  onOfferAvailable();
  return (
    <PageTemplate header={<PageHeader />}>
      <OfferContent />
    </PageTemplate>
  );
};

OfferPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isOfferAvailable: PropTypes.bool.isRequired,
  onOfferRequest: PropTypes.func.isRequired,
  onOfferAvailable: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isOfferAvailable: DataSelector.checkOfferAvailability(state),
});

const mapDispatchToProps = {
  onOfferRequest: DataOperation.checkCurrentOfferId,
  onOfferAvailable: DataOperation.checkCurrentLocationOnOfferPage,
};

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
