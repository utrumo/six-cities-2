import NameSpace from '../name-spaces.js';
import {createSelector} from 'reselect';
import {getNormalizedRating, getRatingInPercent} from '../../utils/rating-to-percent.js';
import {SortingVariants, MAX_REVIEWS_ON_OFFER_PAGE, MAX_IMAGES_ON_OFFER_PAGE} from '../../shared/const.js';
import {getNearestOffers as getNearestOffersUtil} from '../../utils/nearest-offers.js';

const NAME_SPACE = NameSpace.DATA;

export const getCurrentOfferId = (state) => state[NAME_SPACE].currentOfferId;

export const checkOffersAvailability = (state) => !!state[NAME_SPACE].offers.length;

const _getOffers = (state) => state[NAME_SPACE].offers;

export const getLocations = createSelector(
    _getOffers,
    (offers) => {
      const locations = offers.map((it) => it.city.name);
      return [...new Set(locations)].sort();
    },
);

export const getCurrentLocation = (state) => state[NAME_SPACE].currentLocation;

const _getOffersInCurrentLocation = createSelector(
    _getOffers,
    getCurrentLocation,
    (offers, currentLocation) => offers.filter((it) => it.city.name === currentLocation),
);

export const getSortOrder = (state) => state[NAME_SPACE].sortOrder;

export const getCurrentOffers = createSelector(
    _getOffersInCurrentLocation,
    getSortOrder,
    (offers, sortOrder) => {
      switch (sortOrder) {
        case SortingVariants.PRICE_LOW_TO_HIGHT:
          return [...offers].sort((a, b) => a.price - b.price);
        case SortingVariants.PRICE_HIGHT_TO_LOW:
          return [...offers].sort((a, b) => b.price - a.price);
        case SortingVariants.TOP_RATED:
          return [...offers].sort((a, b) => b.rating - a.rating);
      }
      return offers;
    },
);

export const getOffersCountInCurrentLocation = (state) => getCurrentOffers(state).length;

const _getCurrentOffer = createSelector(
    _getOffers,
    getCurrentOfferId,
    (offers, currentOfferId) => offers.find((it) => it.id === currentOfferId),
);

export const checkOfferAvailability = (state) => !!_getCurrentOffer(state);

export const getCurrentOfferCityName = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.city.name;
};

export const getFirstOfferCityLocation = (state) => {
  const offer = getCurrentOffers(state)[0];
  return offer.city.location;
};

export const getCurrentOfferCityLocation = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.city.location;
};

const _getCurrentOfferImages = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.images;
};

export const getCurrentOfferImagesForGallery = createSelector(
    _getCurrentOfferImages,
    (images) => {
      return images.slice(0, MAX_IMAGES_ON_OFFER_PAGE);
    },
);

export const getCurrentOfferIsPremiumFlag = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.isPremium;
};

export const getCurrentOfferIsFavoriteFlag = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.isFavorite;
};

export const getCurrentOfferTitle = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.title;
};

export const getCurrentOfferType = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.type;
};

const _getCurrentOfferRating = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.rating;
};

export const getCurrentOfferRatingInPercent = createSelector(
    _getCurrentOfferRating,
    (rating) => getRatingInPercent(rating),
);

export const getCurrentOfferNormalizedRating = createSelector(
    _getCurrentOfferRating,
    (rating) => getNormalizedRating(rating),
);

export const getCurrentOfferBedrooms = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.bedrooms;
};

export const getCurrentOfferMaxAdults = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.maxAdults;
};

export const getCurrentOfferPrice = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.price;
};

export const getCurrentOfferGoods = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.goods;
};

export const getCurrentOfferDescription = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.description;
};

export const getCurrentOfferHostName = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.host.name;
};

export const getCurrentOfferHostIsPro = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.host.isPro;
};

export const getCurrentOfferHostAvatarUrl = (state) => {
  const currentOffer = _getCurrentOffer(state);
  return currentOffer && currentOffer.host.avatarUrl;
};

const _getOffersReviews = (state) => state[NAME_SPACE].offersReviews;

const _getCurrentOfferComments = createSelector(
    _getOffersReviews,
    getCurrentOfferId,
    (offersReviews, currentOfferId) => {
      const review = offersReviews.find((it) => it.id === currentOfferId);
      return review ? review.comments : [];
    },
);

export const getCommentsForOfferPage = createSelector(
    _getCurrentOfferComments,
    (comments) => {
      return [...comments]
    .slice(0, MAX_REVIEWS_ON_OFFER_PAGE)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
    },
);

export const getCommentsCount = (state) => {
  return getCommentsForOfferPage(state).length;
};

export const getNearestOffers = createSelector(
    _getCurrentOffer,
    getCurrentOffers,
    (offer, offers) => offer && offers ? getNearestOffersUtil(offer, offers) : [],
);

const _getFavoriteOffers = (state) => state[NAME_SPACE].offers.filter((offer) => offer.isFavorite);

const _getFavoriteLocations = createSelector(
    _getFavoriteOffers,
    (offers) => [...new Set(offers.map((it) => it.city.name))].sort(),
);

export const checkFavoriteOffersAvailability = (state) => !!_getFavoriteOffers(state).length;

export const getLocationsWithFavoriteOffers = createSelector(
    _getFavoriteOffers,
    _getFavoriteLocations,
    (offers, locations) => locations.map((location) => ({
      location,
      offers: offers.filter((offer) => offer.city.name === location),
    })),
);

export const getCityMapMarkers = createSelector(
    getCurrentOffers,
    (offers) => {
      return offers.map(({id, location: {latitude, longitude}}) => ({id, latitude, longitude}));
    },
);

export const getPropertyMapMarkers = createSelector(
    _getCurrentOffer,
    getNearestOffers,
    (currentOffer, nearestOffers) => {
      const {id, location: {latitude, longitude}} = currentOffer;
      const currentMark = {id, latitude, longitude};
      const markers = nearestOffers.map((it) => ({
        id: it.id,
        latitude: it.location.latitude,
        longitude: it.location.longitude,
      }));
      markers.push(currentMark);
      return markers;
    });
