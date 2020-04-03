import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item.jsx';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getCommentsForOfferPage} from '../../store/data/selectors.js';

const ReviewsList = ({reviews}) => (
  <ul className="reviews__list">
    {reviews.map(({id, user, rating, comment, date}) => (
      <ReviewsItem
        key={id}
        user={user}
        rating={rating}
        comment={comment}
        date={date}
      />
    ))}
  </ul>
);

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getCommentsForOfferPage(state),
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
