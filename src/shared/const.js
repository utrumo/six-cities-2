const MAX_REVIEWS_ON_OFFER_PAGE = 10;
const DEFAULT_NUMBER_VALUE = -1;
const MAX_IMAGES_ON_OFFER_PAGE = 6;
const ASSETS_PATCH = `/`;

const OfferTypeToPresentName = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

const ActionTypes = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFER_ID: `CHANGE_CURRENT_OFFER_ID`,
  CHANGE_SORT_ORDER: `CHANGE_SORT_ORDER`
};

const SortingVariants = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGHT: `Price: low to hight`,
  PRICE_HIGHT_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

export {
  MAX_REVIEWS_ON_OFFER_PAGE,
  DEFAULT_NUMBER_VALUE,
  ASSETS_PATCH,
  MAX_IMAGES_ON_OFFER_PAGE,
  OfferTypeToPresentName,
  ActionTypes,
  SortingVariants
};
