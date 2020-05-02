import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {getRatingInPercent} from 'utils/rating-to-percent';

const DATE_TIME_DELIMITER = `T`;
const TO_LOCALE_STRING_PROPS = [`en-US`, {year: `numeric`, month: `long`}];

class ReviewsItem extends PureComponent {
  _getDateTime(dateString) {
    return dateString.split(DATE_TIME_DELIMITER)[0];
  }
  _getFormatedDate(dateString) {
    return new Date(dateString).toLocaleString(...TO_LOCALE_STRING_PROPS);
  }

  render() {
    const {user: {name, avatarUrl}, rating, comment, date} = this.props;

    return (
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img
              className="reviews__avatar user__avatar"
              src={avatarUrl}
              width="54"
              height="54"
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">{name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${getRatingInPercent(rating)}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">{comment}</p>
          <time className="reviews__time" dateTime={this._getDateTime(date)} >
            {this._getFormatedDate(date)}
          </time>
        </div>
      </li>
    );
  }
}

ReviewsItem.propTypes = {
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
  }).isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default ReviewsItem;
