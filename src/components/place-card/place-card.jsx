import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {OfferTypeToPresentName} from '../../shared/const';
import {getRatingInPercent} from '../../utils/rating-to-percent';

const OFFER_SECTION = `offer/`;

class PlaceCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
  }

  _mouseEnterHandler() {
    this.props.onMouseEnter(this.props.id);
  }

  render() {
    const {id, image, title, isPremium, rating, price, type} = this.props;

    return <article
      onMouseEnter={this._mouseEnterHandler}
      className="cities__place-card place-card"
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={image}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
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

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  onMouseEnter: PropTypes.func.isRequired
};

export default PlaceCard;
