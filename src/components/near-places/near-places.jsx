import React from 'react';
import PlacesList from '../places-list/places-list.jsx';
import {connect} from 'react-redux';
import {getNearestOffers} from '../../store/data/selectors.js';

const ADDITIONAL_CLASSES = {
  own: `near-places__list`,
  item: {
    own: `near-places__card`,
    imageWrapper: `near-places__image-wrapper`,
  },
};

const NearPlaces = (props) => (
  <section className="near-places places">
    <h2 className="near-places__title">Other places in the neighbourhood</h2>
    <PlacesList {...props} additionalClasses={ADDITIONAL_CLASSES} />
  </section>
);

const mapStateToProps = (state) => ({
  offers: getNearestOffers(state),
});

export {NearPlaces};
export default connect(mapStateToProps)(NearPlaces);

