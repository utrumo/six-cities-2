import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ASSETS_PATCH} from '../../shared/const';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';

const PropertyHost = ({name, isPro, url, description}) => (
  <div className="property__host">
    <h2 className="property__host-title">Meet the host</h2>
    <div className="property__host-user user">
      <div className={classNames(
          `property__avatar-wrapper`,
          {'property__avatar-wrapper--pro': isPro},
          `user__avatar-wrapper`
      )}>
        <img
          className="property__avatar user__avatar"
          src={`${ASSETS_PATCH}${url}`}
          width="74"
          height="74"
          alt="Host avatar"
        />
      </div>
      <span className="property__user-name">{name}</span>
      {isPro && <span className="property__user-status">Pro</span>}
    </div>
    <div className="property__description">
      <p className="property__text">{description}</p>
    </div>
  </div>
);

PropertyHost.propTypes = {
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  name: Selectors.getCurrentOfferHostName(state),
  isPro: Selectors.getCurrentOfferHostIsPro(state),
  url: Selectors.getCurrentOfferHostAvatarUrl(state),
  description: Selectors.getCurrentOfferDescription(state)
});

export {PropertyHost};
export default connect(mapStateToProps)(PropertyHost);
