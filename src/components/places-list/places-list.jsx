import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: this.props.offers[0]
    };
    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
  }

  _getCard(id) {
    return this.props.offers.find((it) => it.id === id);
  }

  _mouseEnterHandler(offerId) {
    this.setState(() => ({
      activeCard: this._getCard(offerId)
    }));
  }

  render() {
    const {offers} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard
        key={offer.id}
        id={offer.id}
        title={offer.title}
        image={offer.previewImage}
        type={offer.type}
        price={offer.price}
        rating={offer.rating}
        isPremium={offer.isPremium}
        onMouseEnter={this._mouseEnterHandler}
      />)}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  })).isRequired
};

export default PlacesList;
