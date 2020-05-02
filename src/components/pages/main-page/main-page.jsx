import React from 'react';
import PropTypes from 'prop-types';

import PageTemplate from 'components/templates/page-template/page-template.jsx';
import PageHeader from 'components/organisms/page-header/page-header.jsx';
import MainContent from './main-content/main-content.jsx';
import MainEmptyContent from './main-empty-content/main-empty-content.jsx';

import {connect} from 'react-redux';
import {checkOffersAvailability, getCurrentLocation} from 'store/data/selectors.js';
import {Operation} from 'store/data/data.js';

const MainPageLoader = ({isOffersAvailable, currentLocation, onOffersAvailable}) => {
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

MainPageLoader.propTypes = {
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

export {MainPageLoader};
export default connect(mapStateToProps, mapDispatchToProps)(MainPageLoader);
