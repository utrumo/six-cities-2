import React from 'react';

import PageHeader from 'components/organisms/page-header/page-header.jsx';
import OfferReviews from '../offer-reviews/offer-reviews.jsx';
import PropertyGallery from '../property-gallery/property-gallery.jsx';
import PropertyMarks from '../property-marks/property-marks.jsx';
import PropertyName from '../property-name/property-name.jsx';
import PropertyRating from '../property-rating/property-rating.jsx';
import PropertyFeatures from '../property-features/property-features.jsx';
import PropertyPrice from '../property-price/property-price.jsx';
import PropertyInside from '../property-inside/property-inside.jsx';
import PropertyHost from '../property-host/property-host.jsx';
import PropertyMap from '../property-map/property-map.jsx';
import NearPlaces from '../near-places/near-places.jsx';

const OfferPage = () => (
  <div className="page">
    <PageHeader />
    <main className="page__main page__main--property">
      <section className="property">
        <PropertyGallery />
        <div className="property__container container">
          <div className="property__wrapper">
            <PropertyMarks />
            <PropertyName />
            <PropertyRating />
            <PropertyFeatures />
            <PropertyPrice />
            <PropertyInside />
            <PropertyHost />
            <OfferReviews />
          </div>
        </div>
        <PropertyMap />
      </section>
      <div className="container">
        <NearPlaces />
      </div>
    </main>
  </div>
);

export default OfferPage;
