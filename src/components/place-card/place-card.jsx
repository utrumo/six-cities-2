import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {OfferTypeToPresentName, ASSETS_PATCH} from '../../shared/const';
import {getRatingInPercent} from '../../utils/rating-to-percent';

const OFFER_SECTION = `/offer/`;

class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
  }

  _mouseEnterHandler() {
    this.props.onMouseMove(this.props.id);
  }

  _mouseLeaveHandler() {
    this.props.onMouseMove(null);
  }

  render() {
    const {
      id,
      image,
      title,
      isPremium,
      rating,
      price,
      type,
      additionalClasses: {own, imageWrapper}
    } = this.props;

    return <article
      onMouseEnter={this._mouseEnterHandler}
      onMouseLeave={this._mouseLeaveHandler}
      className={classNames(`place-card`, own)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={classNames(`place-card__image-wrapper`, imageWrapper)}>
        <Link to={`${OFFER_SECTION}${id}`}>
          <img
            className="place-card__image"
            src={`${ASSETS_PATCH}${image}`}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRatingInPercent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${OFFER_SECTION}${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{OfferTypeToPresentName[type]}</p>
      </div>
    </article>;
  }
}

PlaceCard.defaultProps = {
  additionalClasses: {
    own: ``,
    imageWrapper: ``
  }
};

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  onMouseMove: PropTypes.func.isRequired,

  additionalClasses: PropTypes.exact({
    own: PropTypes.string,
    imageWrapper: PropTypes.string
  })
};

export default PlaceCard;
