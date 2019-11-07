import React from 'react';
import PropTypes from 'prop-types';

const Rating = {
  MIN_VALUE: 0,
  MAX_VALUE: 5
};
const HUNDRED_PERCENT = 100;
const ONE_PERCENT_OF_MAX_RATING = Rating.MAX_VALUE / HUNDRED_PERCENT;
const OFFER_SECTION = `/offer/`;

const getNormalizedRating = (rating) => {
  const {MIN_VALUE, MAX_VALUE} = Rating;
  const roundedValue = Math.round(rating);

  if (roundedValue < MIN_VALUE) {
    return MIN_VALUE;
  } else if (roundedValue > MAX_VALUE) {
    return MAX_VALUE;
  }

  return roundedValue;
};

const getRatingInPercent = (rating) => {
  return getNormalizedRating(rating) / ONE_PERCENT_OF_MAX_RATING;
};

const PlaceCard = (props) => {
  const {
    id,
    image,
    title,
    isPremium,
    rating,
    price,
    type,
    onTitleClick,
  } = props;

  return <article className="cities__place-card place-card">
    {
      isPremium &&
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
      <h2 className="place-card__name" onClick={onTitleClick}>
        <a href={`${OFFER_SECTION}${id}`}>{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
  onTitleClick: PropTypes.func.isRequired,
};

export default PlaceCard;
