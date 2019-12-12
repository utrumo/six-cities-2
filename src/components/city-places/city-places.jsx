import React from 'react';
import PropTypes from 'prop-types';

import PlacesList from '../places-list/places-list.jsx';

import {connect} from 'react-redux';
import Selectors from '../../store/selectors.js';
import ActionCreator from '../../store/action-creator.js';

const ADDITIONAL_CLASSES = {
  own: [`cities__places-list`, `tabs__content`],
  item: {
    own: `cities__place-card`,
    imageWrapper: `cities__image-wrapper`
  }
};

const CityPlaces = ({offers, onCardActive}) => (
  <PlacesList
    offers={offers}
    onCardActive={onCardActive}
    additionalClasses={ADDITIONAL_CLASSES}
  />
);

CityPlaces.propTypes = {
  onCardActive: PropTypes.func.isRequired,

  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired
  })).isRequired
};

const mapStateToProps = (state) => ({
  offers: Selectors.getOffers(state)
});

const mapDispatchToProps = {
  onCardActive: ActionCreator.changeCurrentOfferId
};

export {CityPlaces};
export default connect(mapStateToProps, mapDispatchToProps)(CityPlaces);
