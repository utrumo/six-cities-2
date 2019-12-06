import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';

import OfferReviews from '../offer-reviews/offer-reviews.jsx';
import PropertyGallery from '../property-gallery/property-gallery.jsx';
import PropertyMarks from '../property-marks/property-marks.jsx';
import PropertyName from '../property-name/property-name.jsx';
import PropertyRating from '../property-rating/property-rating.jsx';
import PropertyFeatures from '../property-feauters/property-features.jsx';
import PropertyPrice from '../property-price/property-price.jsx';
import PropertyInside from '../property-inside/property-inside.jsx';
import PropertyHost from '../property-host/property-host.jsx';

import Map from '../map/map.jsx';
import PlacesList from '../places-list/places-list.jsx';

const MAX_IMAGES_ON_OFFER_PAGE = 6;
const ADDITIONAL_CLASSES = {
  own: `near-places__list`,
  item: {
    own: `near-places__card`,
    imageWrapper: `near-places__image-wrapper`
  }
};
const MAP_CONTAINER_STYLE = {paddingLeft: `initial`, paddingRight: `initial`};

class OfferPage extends PureComponent {
  get _markers() {
    const {offer: {id, location: {latitude, longitude}}, nearestOffers} = this.props;
    const currentMark = {id, latitude, longitude};

    const markers = nearestOffers.map((it) => ({
      id: it.id,
      latitude: it.location.latitude,
      longitude: it.location.longitude
    }));

    markers.push(currentMark);

    return markers;
  }

  render() {
    const {offer, reviews, nearestOffers} = this.props;
    const {id, images, isPremium, title, type, rating, bedrooms, maxAdults, price, goods} = offer;
    const {host: {name, isPro, avatarUrl}, description} = offer;
    const markers = this._markers;

    return (
      <div className="page">
        <PageHeader />
        <main className="page__main page__main--property">
          <section className="property">
            <PropertyGallery images={images} count={MAX_IMAGES_ON_OFFER_PAGE} />
            <div className="property__container container">
              <div className="property__wrapper">
                <PropertyMarks isPremium={isPremium} />
                <PropertyName title={title} type={type} />
                <PropertyRating rating={rating} />
                <PropertyFeatures bedrooms={bedrooms} maxAdults={maxAdults} />
                <PropertyPrice price={price} />
                <PropertyInside goods={goods} />
                <PropertyHost name={name} isPro={isPro} url={avatarUrl} description={description} />
                <OfferReviews reviews={reviews} />
              </div>
            </div>
            <div className="container" style={MAP_CONTAINER_STYLE}>
              <section className="property__map map">
                <Map view={offer.city.location} markers={markers} activeCardId={id} />
              </section>
            </div>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <PlacesList offers={nearestOffers} additionalClasses={ADDITIONAL_CLASSES} />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferPage.propTypes = {
  offer: PropTypes.exact({
    id: PropTypes.number.isRequired,
    city: PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.exact({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.exact({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }),
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.exact({
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,

  reviews: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    user: PropTypes.exact({
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired,

  nearestOffers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    city: PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.exact({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired
      }).isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.exact({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    }).isRequired,
    previewImage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]).isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.exact({
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      avatarUrl: PropTypes.string.isRequired
    }).isRequired
  })).isRequired
};

export default OfferPage;
