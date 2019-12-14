import React from 'react';

import PageHeader from '../page-header/page-header.jsx';
import LocationsList from '../locations-list/locations-list.jsx';
import PlacesFound from '../places-found/places-found.jsx';
import PlacesSorting from '../places-soritng/places-sorting.jsx';
import CityPlaces from '../city-places/city-places.jsx';
import CityMap from '../city-map/city-map.jsx';

const MainPage = () => (
  <div className="page page--gray page--main">
    <PageHeader isMain/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <PlacesFound />
            <PlacesSorting />
            <CityPlaces />
          </section>
          <div className="cities__right-section">
            <CityMap />
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default MainPage;
