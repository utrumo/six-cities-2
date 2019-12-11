import {MAX_IMAGES_ON_OFFER_PAGE} from '../shared/const.js';
import {getNormalizedRating, getRatingInPercent} from '../utils/rating-to-percent.js';
import {MAX_REVIEWS_ON_OFFER_PAGE} from '../shared/const.js';
import {getNearestOffers} from '../utils/nearest-offers.js';

const Selectors = {
  getLocations(state) {
    const locations = state.offers.map((it) => it.city.name);
    return [...new Set(locations)];
  },

  getCurrentLocation(state) {
    return state.currentLocation;
  },

  getOffers(state) {
    return state.offers.filter((it) => it.city.name === state.currentLocation);
  },

  getOffersCount(state) {
    return Selectors.getOffers(state).length;
  },

  getCurrentOfferId(state) {
    return state.currentOfferId;
  },

  _getCurrentOffer(state) {
    return state.offers.find((it) => it.id === state.currentOfferId);
  },

  checkOfferAvailability(state) {
    return !!Selectors._getCurrentOffer(state);
  },

  getCurrentOfferCityName(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.city.name;
  },

  getFirstOfferCityLocation(state) {
    const offer = Selectors.getOffers(state)[0];
    return offer.city.location;
  },

  getCurrentOfferCityLocation(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.city.location;
  },

  _getCurrentOfferImages(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.images;
  },

  getCurrentOfferImagesForGallery(state) {
    const images = Selectors._getCurrentOfferImages(state);
    return images.slice(0, MAX_IMAGES_ON_OFFER_PAGE);
  },

  getCurrentOfferIsPremiumFlag(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.isPremium;
  },

  getCurrentOfferTitle(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.title;
  },

  getCurrentOfferType(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.type;
  },

  _getCurrentOfferRating(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.rating;
  },

  getCurrentOfferRatingInPercent(state) {
    const rating = Selectors._getCurrentOfferRating(state);
    return getRatingInPercent(rating);
  },

  getCurrentOfferNormalizedRating(state) {
    const rating = Selectors._getCurrentOfferRating(state);
    return getNormalizedRating(rating);
  },

  getCurrentOfferBedrooms(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.bedrooms;
  },

  getCurrentOfferMaxAdults(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.maxAdults;
  },

  getCurrentOfferPrice(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.price;
  },

  getCurrentOfferGoods(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.goods;
  },

  getCurrentOfferDescription(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.description;
  },

  getCurrentOfferHostName(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.host.name;
  },

  getCurrentOfferHostIsPro(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.host.isPro;
  },

  getCurrentOfferHostAvatarUrl(state) {
    const currentOffer = Selectors._getCurrentOffer(state);
    return currentOffer && currentOffer.host.avatarUrl;
  },

  _getCurrentOfferComments(state) {
    const review = state.offersReviews.find((it) => it.id === state.currentOfferId);
    return review ? review.comments : [];
  },

  getCommentsForOfferPage(state) {
    return Selectors
      ._getCurrentOfferComments(state)
      .slice(0, MAX_REVIEWS_ON_OFFER_PAGE)
      .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  },

  getCommentsCount(state) {
    return Selectors.getCommentsForOfferPage(state).length;
  },

  getNearestOffers(state) {
    const offer = Selectors._getCurrentOffer(state);
    const offers = Selectors.getOffers(state);

    return offer && offers ? getNearestOffers(offer, offers) : [];
  },

  getCityMapMarkers(state) {
    const offers = Selectors.getOffers(state);
    return offers.map(({id, location: {latitude, longitude}}) => ({id, latitude, longitude}));
  },

  getPropertyMapMarkers(state) {
    const {id, location: {latitude, longitude}} = Selectors._getCurrentOffer(state);
    const currentMark = {id, latitude, longitude};
    const nearestOffers = Selectors.getNearestOffers(state);
    const markers = nearestOffers.map((it) => ({
      id: it.id,
      latitude: it.location.latitude,
      longitude: it.location.longitude
    }));
    markers.push(currentMark);
    return markers;
  }
};

export default Selectors;
