const MAX_REVIEWS_ON_OFFER_PAGE = 10;
const DEFAULT_NUMBER_VALUE = -1;
const MAX_IMAGES_ON_OFFER_PAGE = 6;
const ImagePath = {
  HEADER_LOGO: `/img/logo.svg`,
  MAP_PIN: `/img/pin.svg`,
  MAP_ACTIVE_PIN: `/img/pin-active.svg`
};

const OfferTypeToPresentName = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

const SortingVariants = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGHT: `Price: low to hight`,
  PRICE_HIGHT_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`
};

const ResponseCode = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401
};

const UrlPath = {
  ROOT: `/`,
  LOGIN: `/login`,
  OFFER: `/offer`,
  HOTELS: `/hotels`,
  FAVORITES: `/favorites`
};

export {
  MAX_REVIEWS_ON_OFFER_PAGE,
  DEFAULT_NUMBER_VALUE,
  ImagePath,
  MAX_IMAGES_ON_OFFER_PAGE,
  OfferTypeToPresentName,
  SortingVariants,
  ResponseCode,
  UrlPath
};
