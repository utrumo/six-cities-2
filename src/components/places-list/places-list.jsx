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
    if (this.props.onCardActive) {
      this.props.onCardActive(offerId);
    }
  }

  render() {
    const {offers, additionalClasses: {own, item}} = this.props;
    return <div className={classNames(`places__list`, own)}>
      {offers.map((offer) => (
        <PlaceCard
          additionalClasses={item}
          key={offer.id}
          id={offer.id}
          title={offer.title}
          image={offer.previewImage}
          type={offer.type}
          price={offer.price}
          rating={offer.rating}
          isPremium={offer.isPremium}
          isFavorite={offer.isFavorite}
          onMouseMove={this._mouseMoveHandler}
        />)
      )}
    </div>;
  }
}

PlacesList.defaultProps = {
  additionalClasses: {},
};

PlacesList.propTypes = {
  onCardActive: PropTypes.func,

  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
  })).isRequired,

  additionalClasses: PropTypes.exact({
    own: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    item: PropTypes.exact({
      own: PropTypes.string,
      imageWrapper: PropTypes.string,
      imageWidth: PropTypes.number,
      imageHeight: PropTypes.number,
      cardInfo: PropTypes.string,
    }),
  }).isRequired,
};

export default PlacesList;
