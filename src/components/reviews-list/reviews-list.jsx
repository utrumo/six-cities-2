import React, {PureComponent} from 'react';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import PropTypes from 'prop-types';
import {MAX_REVIEWS_ON_OFFER_PAGE} from '../../shared/const.js';


class ReviewsList extends PureComponent {
  get _reviews() {
    const {reviews} = this.props;
    return reviews
      .slice(0, MAX_REVIEWS_ON_OFFER_PAGE)
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
  }

  render() {
    const reviews = this._reviews;
    return (
      <ul className="reviews__list">
        {reviews.map((it) => (
          <ReviewsItem
            key={it.id}
            user={it.user}
            rating={it.rating}
            comment={it.comment}
            date={it.date}
          />
        ))}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};

export default ReviewsList;
