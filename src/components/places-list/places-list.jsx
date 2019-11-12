import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlacesList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: this.props.locations[0]
    };

    this._titleClickHandler = this._titleClickHandler.bind(this);
    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
  }

  _getCard(id) {
    return this.props.locations.find((it) => it.id === id);
  }

  _titleClickHandler(evt) {
    evt.preventDefault();
  }

  _mouseEnterHandler(offerId) {
    this.setState(() => ({
      activeCard: this._getCard(offerId)
    }));
  }

  render() {
    const {locations} = this.props;
    const cards = locations.map((location) => {
      return <PlaceCard
        key={location.id}
        id={location.id}
        title={location.title}
        image={location.previewImage}
        type={location.type}
        price={location.price}
        rating={location.rating}
        isPremium={location.isPremium}
        onTitleClick={this._titleClickHandler}
        onMouseEnter={this._mouseEnterHandler}
      />;
    });
    return <div className="cities__places-list places__list tabs__content">
      {cards}
    </div>;
  }
}

PlacesList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired
  })).isRequired
};

export default PlacesList;
