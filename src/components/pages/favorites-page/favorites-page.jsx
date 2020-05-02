import React from 'react';
import PropTypes from 'prop-types';

import PageTemplate from '@ui/page-template/page-template.jsx';
import PageHeader from '@ui/page-header/page-header.jsx';
import PageFooter from '@ui/page-footer/page-footer.jsx';
import FavoritesContent from './favorites-content/favorites-content.jsx';
import FavoritesEmptyContent from './favorites-empty-content/favorites-empty-content.jsx';

import {connect} from 'react-redux';
import {checkFavoriteOffersAvailability} from 'store/data/selectors.js';

const FavoritesPage = ({isFavoriteOffersAvailable}) => {
  return (
    <PageTemplate
      className={isFavoriteOffersAvailable || `page--favorites-empty`}
      header={<PageHeader />}
      footer={<PageFooter />}
    >
      {
        isFavoriteOffersAvailable
          ? <FavoritesContent />
          : <FavoritesEmptyContent />
      }
    </PageTemplate>
  );
};

FavoritesPage.propTypes = {
  isFavoriteOffersAvailable: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isFavoriteOffersAvailable: checkFavoriteOffersAvailability(state),
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
