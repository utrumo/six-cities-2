import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this._mouseMoveHandler = this._mouseMoveHandler.bind(this);
  }

  _mouseMoveHandler(offerId) {
    if (!this.props.onCardActive) {
      return;
    }
    this.props.onCardActive(offerId);
  }

  render() {
    const {offers, additionalClasses: {own, item}} = this.props;
    return <div className={classNames(`places__list`, own)}>
      {offers.map((offer) => <PlaceCard
        additionalClasses={item}
        key={offer.id}
        id={offer.id}
        title={offer.title}
        image={offer.previewImage}
        type={offer.type}
        price={offer.price}
        rating={offer.rating}
        isPremium={offer.isPremium}
        onMouseMove={this._mouseMoveHandler}
      />)}
    </div>;
  }
}

PlacesList.defaultProps = {
  additionalClasses: {
    own: [],
    item: {}
  }
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  })).isRequired,

  onCardActive: PropTypes.func,

  additionalClasses: PropTypes.exact({
    own: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string
    ]),
    item: PropTypes.exact({
      own: PropTypes.string,
      imageWrapper: PropTypes.string
    })
  })
};

export default PlacesList;
