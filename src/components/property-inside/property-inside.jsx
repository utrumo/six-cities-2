import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const PropertyInside = ({goods}) => (
  goods.length ? (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((it, i) => (
          <li key={i} className="property__inside-item">{it}</li>
        ))}
      </ul>
    </div>
  ) : null
);

PropertyInside.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = (state) => ({
  goods: Selectors.getCurrentOfferGoods(state)
});

export {PropertyInside};
export default connect(mapStateToProps)(PropertyInside);
