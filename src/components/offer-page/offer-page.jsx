import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../page-header/page-header.jsx';
import OfferReviews from '../offer-reviews/offer-reviews.jsx';
import NearPlaces from '../near-places/near-places.jsx';
import {
  MAX_IMAGE_ON_OFFER_PAGE,
  ASSETS_PATCH,
  OfferTypeToPresentName
} from '../../shared/const';

const getMaxImages = (images) => {
  return images.slice(0, MAX_IMAGE_ON_OFFER_PAGE);
};
import {
  getNormalizedRating,
  getRatingInPercent
} from '../../utils/rating-to-percent';

const OfferPage = (props) => {
  const {
    id,
    title,
    description,
    images,
    type,
    bedrooms,
    maxAdults,
    price,
    rating,
    isPremium,
    goods,
    host: {name, isPro, avatarUrl}
  } = props;
  const maxImages = getMaxImages(images);

  return <div className="page">
    <PageHeader/>
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {maxImages.map((src, i) => (
              <div key={`${id}-${i}`} className="property__image-wrapper">
                <img className="property__image" src={`${ASSETS_PATCH}${src}`} alt="Photo studio" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium &&
              <div className="property__mark">
                <span>Premium</span>
              </div>
            }
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <p
                style={{padding: `5px 0 15px`, fontSize: `16px`, textAlign: `center`}}
                className="place-card__type"
              >
                {OfferTypeToPresentName[type]}
              </p>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${getRatingInPercent(rating)}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">
                {getNormalizedRating(rating)}
              </span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                Entire place
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            {!!goods.length &&
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((it, i) => (
                    <li key={`${id}-${i}`} className="property__inside-item">{it}</li>
                  ))}
                </ul>
              </div>
            }
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className={`property__avatar-wrapper${isPro
                  ? ` property__avatar-wrapper--pro`
                  : ``
                } user__avatar-wrapper`
                }>
                  <img
                    className="property__avatar user__avatar"
                    src={`${ASSETS_PATCH}${avatarUrl}`}
                    width="74"
                    height="74"
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">
                  {name}
                </span>
                {isPro &&
                <span className="property__user-status">
                  Pro
                </span>
                }
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <OfferReviews />
          </div>
        </div>
        <section className="property__map map"></section>
      </section>
      <NearPlaces />
    </main>
  </div>;
};

OfferPage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
};

export default OfferPage;
