import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {ASSETS_PATCH} from '../../shared/const';

const PropertyHost = (props) => {
  const {name, isPro, url, description} = props;
  const classes = classNames(
      `property__avatar-wrapper`,
      {'property__avatar-wrapper--pro': isPro},
      `user__avatar-wrapper`
  );
  const src = `${ASSETS_PATCH}${url}`;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className={classes}>
          <img
            className="property__avatar user__avatar"
            src={src}
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
};

PropertyHost.propTypes = {
  name: PropTypes.string.isRequired,
  isPro: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default PropertyHost;
