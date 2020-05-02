import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {DEFAULT_NUMBER_VALUE, OfferTypeToPresentName} from 'shared/const';
import {getRatingInPercent} from 'utils/rating-to-percent';

import {connect} from 'react-redux';
import {Operation} from 'store/data/data.js';

const OFFER_SECTION = `/offer/`;
const DEFAULT_IMAGE_SIZES = {
  WIDTH: 260,
  HEIGHT: 200,
};

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandler = this._mouseLeaveHandler.bind(this);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  _mouseEnterHandler() {
    this.props.onMouseMove(this.props.id);
  }

  _mouseLeaveHandler() {
    this.props.onMouseMove(DEFAULT_NUMBER_VALUE);
  }

  _handleButtonClick() {
    const {id, isFavorite, onButtonClick} = this.props;
    onButtonClick(id, isFavorite);
  }

  render() {
    const {id, image, title, isPremium, isFavorite, rating, price, type} = this.props;
    const {
      additionalClasses: {
        own,
        imageWrapper,
        imageWidth = DEFAULT_IMAGE_SIZES.WIDTH,
        imageHeight = DEFAULT_IMAGE_SIZES.HEIGHT,
        cardInfo,
      },
    } = this.props;

    return (
      <article
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
              src={image}
              width={imageWidth}
              height={imageHeight}
              alt="Place image"
            />
          </Link>
        </div>
        <div className={classNames(`place-card__info`, cardInfo)}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={classNames(
                  `place-card__bookmark-button`,
                  {'place-card__bookmark-button--active': isFavorite},
                  `button`
              )}
              type="button"
              onClick={this._handleButtonClick}
            >
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
      </article>
    );
  }
}

PlaceCard.defaultProps = {
  additionalClasses: {},
};

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,

  additionalClasses: PropTypes.exact({
    own: PropTypes.string,
    imageWrapper: PropTypes.string,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
    cardInfo: PropTypes.string,
  }).isRequired,

  onMouseMove: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onButtonClick: Operation.toggleFavoriteStatus,
};

export {PlaceCard};
export default connect(null, mapDispatchToProps)(PlaceCard);
