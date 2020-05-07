import React from 'react';
import {connect} from 'react-redux';
import {DataSelector, DataOperation} from 'store';
import PlacesList from '@ui/places-list/places-list.jsx';

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
  offers: DataSelector.getCurrentOffers(state),
});

const mapDispatchToProps = {
  onCardActive: DataOperation.changeCurrentOfferId,
};

export {CityPlaces};
export default connect(mapStateToProps, mapDispatchToProps)(CityPlaces);
