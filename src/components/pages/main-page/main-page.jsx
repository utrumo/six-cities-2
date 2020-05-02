import React from 'react';
import PropTypes from 'prop-types';

import PageTemplate from '@ui/page-template/page-template.jsx';
import PageHeader from '@ui/page-header/page-header.jsx';
import MainContent from './main-content/main-content.jsx';
import MainEmptyContent from './main-empty-content/main-empty-content.jsx';

import {connect} from 'react-redux';
import {checkOffersAvailability, getCurrentLocation} from 'store/data/selectors.js';
import {Operation} from 'store/data/data.js';

const MainPage = ({isOffersAvailable, currentLocation, onOffersAvailable}) => {
  if (isOffersAvailable) {
    onOffersAvailable();
  }

  return (
    <PageTemplate
      additionalClasses={{
        page: `page--gray page--main`,
        main: `page__main--index${currentLocation ? `` : ` page__main--index-empty`}`,
      }}
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
  isOffersAvailable: checkOffersAvailability(state),
  currentLocation: getCurrentLocation(state),
});

const mapDispatchToProps = {
  onOffersAvailable: Operation.checkCurrentLocationOnMainPage,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
