import React from 'react';
import PropTypes from 'prop-types';
import {OfferTypeToPresentName} from '../../shared/const';

const PropertyName = (props) => {
  const {title, type} = props;
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">{title}</h1>
      <p
        style={{padding: `5px 0 15px`, fontSize: `16px`, textAlign: `center`}}
        className="place-card__type"
      >
        {OfferTypeToPresentName[type]}
      </p>
      <button className="property__bookmark-button button" type="button">
        <svg className="property__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">To bookmarks</span>
      </button>
    </div>
  );
};

PropertyName.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
};

export default PropertyName;
