import React from 'react';
import PlacesList from '../places-list/places-list.jsx';
import {connect} from 'react-redux';
import {getCurrentOffers} from '../../store/data/selectors.js';
import {ActionCreator} from '../../store/data/data.js';

const ADDITIONAL_CLASSES = {
  own: [`cities__places-list`, `tabs__content`],
  item: {
    own: `cities__place-card`,
    imageWrapper: `cities__image-wrapper`,
  },
};

const CityPlaces = (props) => (
  <PlacesList {...props} additionalClasses={ADDITIONAL_CLASSES} />
);

const mapStateToProps = (state) => ({
  offers: getCurrentOffers(state),
});

const mapDispatchToProps = {
  onCardActive: ActionCreator.changeCurrentOfferId,
};

export {CityPlaces};
export default connect(mapStateToProps, mapDispatchToProps)(CityPlaces);
