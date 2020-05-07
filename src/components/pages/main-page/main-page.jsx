import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PageTemplate from '@ui/page-template/page-template.jsx';
import PageHeader from '@ui/page-header/page-header.jsx';
import MainContent from './main-content/main-content.jsx';
import MainEmptyContent from './main-empty-content/main-empty-content.jsx';
import {DataOperation, DataSelector} from 'store';

const MainPage = ({isOffersAvailable, currentLocation, onOffersAvailable}) => {
  if (isOffersAvailable) {
    onOffersAvailable();
  }

  return (
    <PageTemplate
      className="page--gray page--main"
      header={<PageHeader />}
    >
      {
        currentLocation
          ? <MainContent />
          : <MainEmptyContent />
      }
    </PageTemplate>
  );
};

MainPage.propTypes = {
  isOffersAvailable: PropTypes.bool.isRequired,
  onOffersAvailable: PropTypes.func.isRequired,
  currentLocation: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isOffersAvailable: DataSelector.checkOffersAvailability(state),
  currentLocation: DataSelector.getCurrentLocation(state),
});

const mapDispatchToProps = {
  onOffersAvailable: DataOperation.checkCurrentLocationOnMainPage,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
