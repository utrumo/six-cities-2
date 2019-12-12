import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const PropertyMarks = ({isPremium}) => (
  <Fragment>
    {isPremium &&
        <div className="property__mark">
          <span>Premium</span>
        </div>
    }
  </Fragment>
);


PropertyMarks.propTypes = {
  isPremium: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isPremium: Selectors.getCurrentOfferIsPremiumFlag(state)
});

export {PropertyMarks};
export default connect(mapStateToProps)(PropertyMarks);
