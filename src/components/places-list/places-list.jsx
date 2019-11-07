import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

const onTitleClick = (evt) => {
  evt.preventDefault();
};

const PlacesList = (props) => {
  const {locations} = props;
  const cardList = locations.map((location) => {
    return <PlaceCard
      key={location.id}
      id={location.id}
      title={location.title}
      image={location.previewImage}
      type={location.type}
      price={location.price}
      rating={location.rating}
      isPremium={location.isPremium}
      onTitleClick={onTitleClick}
    />;
  });
  return <div className="cities__places-list places__list tabs__content">
    {cardList}
  </div>;
};

PlacesList.propTypes = {
  locations: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`Apartment`, `Private room`]).isRequired,
  })).isRequired
};

export default PlacesList;
